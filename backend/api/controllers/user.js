#!/usr/bin/node
const { v4 } = require('uuid');
// const jwt = require('jsonwebtoken');
const sha1 = require('sha1');
const { Student, StudentRecords } = require('../../models/student_details');
const { ExaminerRecords, Examiner } = require('../../models/examiner');
const { mysqldb, sequelize } = require('../../models/engine/db');
const redisClient = require('../../models/engine/redis');

class User {
  static async studentSignUp(req, res) {
    const {
      firstname, lastname, email, password,
    } = req.body;
    // console.log(req.body);
    const queryObj = { email };
    const student = await mysqldb.userExists(Student, queryObj);
    if (student) {
      res.status(400).json({ error: 'user exists' });
    } else {
      try {
        if (!firstname) {
          res.status(400).json({ error: 'firstname missing' });
          return;
        }

        if (!lastname) {
          res.status(400).json({ error: 'lastname missing' });
          return;
        }

        if (!email) {
          res.status(400).json({ error: 'email missing' });
          return;
        }

        if (!password) {
          res.status(400).json({ error: 'password missing' });
          return;
        }
        const obj = {
          firstName: firstname, lastName: lastname, email, password: sha1(password),
        };
        const newStudent = await mysqldb.createModel(Student, obj);
        delete newStudent.password;
        res.status(201).json(newStudent);
      } catch (err) {
        res.status(500).json({ error: `internal error ${err}` });
      }
    }
  }

  static async studentSignIn(req, res) {
    const { email, password } = req.body;
    if (!email) {
      res.status(400).json({ error: 'email missing' });
      return;
    }

    if (!password) {
      res.status(400).json({ error: 'password missing' });
      return;
    }

    const queryObj = { email, password: sha1(password) };
    const studentExists = await mysqldb.userExists(Student, queryObj);
    if (!studentExists) {
      /* add a redirect */
      res.status(404).json({ error: 'account not found' });
    } else {
      /* eslint-disable-next-line */
      try {
        const student = await mysqldb.getUser(Student, { email, password: sha1(password) });
        const token = v4();
        await redisClient.set(`auth_${token}`, `${student.studentId}`, 86400);
        res.status(200).header('Authorization', token).json({ token });
      } catch (err) {
        res.status(500).json({ error: `internal error ${err}` });
      }
    }
  }

  static async examinerSignUp(req, res) {
    const {
      firstname, lastname, email, password,
    } = req.body;
    const queryObj = { email };
    const examiner = await mysqldb.userExists(Examiner, queryObj);
    if (examiner) {
      res.status(400).json({ error: 'user exists' });
    } else {
      try {
        if (!firstname) {
          res.status(400).json({ error: 'firstname missing' });
          return;
        }

        if (!lastname) {
          res.status(400).json({ error: 'lastname missing' });
          return;
        }

        if (!email) {
          res.status(400).json({ error: 'email missing' });
          return;
        }

        if (!password) {
          res.status(400).json({ error: 'password missing' });
          return;
        }
        const obj = {
          firstName: firstname, lastName: lastname, email, password: sha1(password),
        };
        const newExaminer = await mysqldb.createModel(Examiner, obj);
        delete newExaminer.password;
        res.status(201).json(newExaminer);
      } catch (err) {
        res.status(500).json({ error: `internal error ${err}` });
      }
    }
  }

  static async examinerSignIn(req, res) {
    const { email, password } = req.body;
    if (!email) {
      res.status(400).json({ error: 'email missing' });
      return;
    }

    if (!password) {
      res.status(400).json({ error: 'password missing' });
      return;
    }

    const queryObj = { email, password: sha1(password) };
    const examinerExists = await mysqldb.userExists(Examiner, queryObj);
    if (!examinerExists) {
      /* add a redirect */
      res.status(404).json({ error: 'account not found' });
    } else {
      try {
        const examiner = await mysqldb.getUser(Examiner, { email, password: sha1(password) });
        const token = v4();
        await redisClient.set(`auth_${token}`, `${examiner.examinerId}`, 86410);
        res.status(200).header('Authorization', token).json({ token });
      } catch (err) {
        res.status(500).json({ error: `internal error ${err}` });
      }
    }
  }
}

module.exports = User;
