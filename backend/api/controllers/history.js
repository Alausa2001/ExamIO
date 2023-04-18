#!/usr/bin/node

const { ExaminerRecords, Examiner } = require('../../models/examiner');
const { StudentRecords, Student } = require('../../models/student_details');
const { mysqldb } = require('../../models/engine/db');
const mongod = require('../../models/engine/mongodb');
const redisClient = require('../../models/engine/redis');

class History {
  static async studentRecords(req, res) {
    const token = req.get('Authorization');
    const studentId = await redisClient.get(`auth_${token}`);
    const records = await mysqldb.allRecords(StudentRecords, { studentId }, ['examId', 'course', 'createdAt']);
    
    if (!records) {
      res.status(404).json({ error: 'records not found' });
      return;
    }
    res.status(200).json({ records });
  }

  static async studentRecord(req, res) {
    const token = req.get('Authorization');
    const examId = req.params.examId;
    const studentId = await redisClient.get(`auth_${token}`);
    const record = await mysqldb.allRecords(StudentRecords, { studentId, examId });
    if (!record) {
      res.status(404).json({ error: 'record not found' });
      return;
    }
    res.status(200).json({ record });
  }

  static async examinerRecords(req, res) {
    const token = req.get('Authorization');
    const examinerId = await redisClient.get(`auth_${token}`);
    const records = await mysqldb.allRecords(ExaminerRecords, { examinerId }, ['examId', 'course', 'createdAt']);
    
    if (!records) {
      res.status(404).json({ error: 'records not found' });
      return;
    }
    res.status(200).json({ records });
  }

  static async getQuestions(req, res) {
    const examId = req.params.examId;
    if (!examId) {
      res.status(400).json({ error: 'examId missing' });
      return
    }
    const questions = await mongod.getQuestions(examId, null);
    if (!questions) {
      res.status(404).json({ error: 'no exam questions' });
      return;
    }
    res.status(200).json({ questions });
  }

}

module.exports = History;
