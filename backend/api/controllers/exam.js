#!/usr/bin/node

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

    if (!examId) {
      res.status(400).json({ error: 'examId is missing' });
      return;
    }
    const questions = await mongod.getQuestions(examId, page);
    res.status(200).json({ questions });

  }
}

module.exports = Examination;
