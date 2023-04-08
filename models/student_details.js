#!/usr/bin/node
const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, mysqldb } = require('./engine/db');

/* student details */
class StudentDetails extends Sequelize.Model {}

StudentDetails.init({
  firstName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  sequelize,
  tableName: 'student_details',
  modelName: 'StudentDetails',
  timestamp: true,
});

/* Exam Records */
class ExamRecords extends Sequelize.Model {}

ExamRecords.init({
  date: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  course: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  examId: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'exam_records',
  modelName: 'ExamRecords',
  timestamp: true,
});

async function create() {
  const exam = ExamRecords.build({date: '11', course: 'math', examId: '12'})
  const r = await mysqldb.save(exam);
  const n = await mysqldb.update(exam, {course: 'bio'});
  console.log(n);
  console.log(r);
}
create();
