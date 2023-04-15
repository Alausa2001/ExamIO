#!/usr/bin/node
const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, mysqldb } = require('./engine/db');

/* student details */
class Student extends Sequelize.Model {}

Student.init({
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
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'student',
  modelName: 'Student',
  timestamp: true,
});

/* Exam Records */
class StudentRecords extends Sequelize.Model {}

StudentRecords.init({
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
  tableName: 'student_records',
  modelName: 'StudentRecords',
  timestamp: true,
});

/* define Student and Exam relationship (one-to-many) */
Student.hasMany(StudentRecords);
StudentRecords.belongsTo(Student, {
  foreignKey: {
    name: 'studentId',
    allowNull: false,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
});

async function create() {
  await mysqldb.createTables();
  //const field = ['firstName', 'lastName'];
  //const all = await mysqldb.selectAll(Student, field);
  // await sequelize.sync({ force: true });
  
  const student = {firstName: 'wale', lastName: 'adenuga', email: 'wale@gmail', password: 'walexx2001'};
  const record = await mysqldb.createModel(Student, student);

  const exam = {date: '11', course: 'math', examId: '12', studentId: record.studentId};
  const newExam = await mysqldb.createModel(StudentRecords, exam)
  //const all = await mysqldb.selectAll(Student);
  // console.log(all);
  console.log(record);
  console.log(newExam);
  
  // console.log(all);
}
//create();

module.exports = { Student, StudentRecords };
