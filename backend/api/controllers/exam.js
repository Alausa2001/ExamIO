#!/usr/bin/node

const fs = require('fs');
const { StudentRecords, Student } = require('../../models/student_details');
const { ExaminerRecords, Examiner } = require('../../models/examiner');
const { mysqldb, sequelize } = require('../../models/engine/db');
const mongod = require('../../models/engine/mongodb');
const redisClient = require('../../models/engine/redis');

class Examination {
  static async createExam(req, res) {
    const { course, duration, questions } = req.body;

    if (!course) {
      res.status(400).json({ error: 'course not specified' });
      return;
    }

    if (!questions) {
      res.status(400).json({ error: 'questions missing' });
      return;
    }

    const token = req.header('Authorization');
    const examinerId = await redisClient.get(`auth_${token}`);

    if (!examinerId) {
      res.status(201).json({ error: 'unauthorized' });
      return;
    }
    const obj = { course, duration, examinerId }
    const exam = await mysqldb.createModel(ExaminerRecords, obj);
    const examId = exam.examId;
    const examQuestions = await mongod.createExam(questions, examId);
    res.status(201).json({ examId });
  }

  static async takeExam(req, res) {
    const { examId, page = 0 } = req.body;
    /* To do: an exam should be taken once only */

    if (!examId) {
      res.status(400).json({ error: 'examId is missing' });
      return;
    }
    const noOfQues = await mongod.countQuestions({ examId })

    if (noOfQues <= 0) {
      res.status(404).json({ error: 'exam doesnt exist' });
      return;
    }

    const questions = await mongod.getQuestions(examId, page);
    res.status(200).json({ totalNoOfQuestions: noOfQues, questions });
    return;
  }

  static async submitExam(req, res) {
    const { duration, course, score, examId } = req.body;

    if (!examId) {
      res.status(400).json({ error: 'examId is missing' });
      return;
    }
    const noOfQues = await mongod.countQuestions({ examId });

    if (noOfQues <= 0) {
      res.status(404).json({ error: 'exam doesnt exist' });
      return;
    }

    if (!course) {
      res.status(400).json({ error: 'course not specified' });
      return;
    }

    if (!score) {
      res.status(400).json({ error: 'score is missing' });
      return;
    }

    const token = req.header('Authorization');
    const studentId = await redisClient.get(`auth_${token}`);

    /* To do: an exam should be taken once only */

    if (!studentId) {
      res.status(401).json({ error: 'unauthorized' });
      return;
    }
    const studentRecord = { course, examId, duration, score, studentId };
    const newRecord = await mysqldb.createModel(StudentRecords, studentRecord);
    res.status(201).json({ 'status': 'submission successful', newRecord });
  }

  static async results(req, res) {
    const { examId } = req.query;

    if (!examId) {
      res.status(400).json({ error: 'exam not specified' });
      return;
    }
    const results = await mysqldb.results(
      Student, StudentRecords, ['firstname', 'lastname'], ['score'], { examId });

    if (!results) {
      res.status(400).json({ error: 'record not found' });
      return;
    }

    const folder = '/tmp/examio/results/';
    try {
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
      } 
    } catch(err) {
      console.log(`${err}`);
    }
    const localPath = `${folder}${examId}.txt`;

    if (fs.existsSync(localPath)) {
      fs.unlink(localPath, (err) => {
        if (err) console.log(`${err}`);
      });
    }
    fs.writeFile(localPath, 'Firstname, Lastname, Score\n\n', { flag: 'a' }, (err) => {
      if (err) console.log(`${err}`);
    });
    let counter = 0;
    for (let result of results) {
      counter++;
      let format = `${counter}. ${result['Student.firstname']}, ${result['Student.lastname']}, ${result.score}\n`;
      fs.writeFile(localPath, format, { flag: 'a' }, (err) => {
        if (err) console.log(`${err}`);
      });
    }
    res.json({ file_location: localPath });
  }
}

module.exports = Examination;
