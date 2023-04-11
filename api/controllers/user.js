#!/usr/bin/node
const { Student, StudentRecords } = require('../../models/student_details');
const { ExaminerRecords, Examiner } = require('../../models/examiner');
const { mysqldb, sequelize } = require('../../models/engine/db')

class User {

  static async studentSignUp(req, res) {
    const { firstname, lastname, email, password } = req.body;
    console.log(req.body);
    const student = await mysqldb.userExists(Student, email);
    if (student) {
      res.status(400).json({ error: 'user exists' });
      return;
    }
    else {
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
        const obj = { firstName: firstname, lastName: lastname, email, password };
        const newStudent = await mysqldb.createModel(Student, obj)
        res.status(201).json(newStudent);
      } catch (err) {
        res.status(500).json({ error: `internal error ${err}` });
      }
    }
  }

  static async examinerSignUp(req, res) {
    const { firstname, lastname, email, password } = req.body;
    console.log(req.body);
    const examiner = await mysqldb.userExists(Examiner, email);
    if (examiner) {
      res.status(400).json({ error: 'user exists' });
      return;
    }
    else {
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
        const obj = { firstName: firstname, lastName: lastname, email, password };
        const newExaminer = await mysqldb.createModel(Examiner, obj)
        res.status(201).json(newExaminer);
      } catch (err) {
        res.status(500).json({ error: `internal error ${err}` });
      }
    }
  }
}

module.exports = User;
