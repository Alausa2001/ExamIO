#!/usr/bin/node

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
    res.status(201).json(examQuestions);
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
}

module.exports = Examination;
