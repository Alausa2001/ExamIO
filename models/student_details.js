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
}, {
  sequelize,
  tableName: 'student',
  modelName: 'Student',
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

/* define Student and Exam relationship (one-to-many)*/
Student.hasMany(ExamRecords);
ExamRecords.belongsTo(Student, {
  foreignKey: {
    name: 'studentId',
    allowNull: false,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
});


async function create() {
  await mysqldb.createTables();
  // await sequelize.sync({ force: true });
  let student = Student.build({firstName: 'wale', lastName: 'adenuga', email: 'adenuga@gmail'});
  student = await mysqldb.save(student);




  const exam = ExamRecords.build({date: '11', course: 'math', examId: '12', studentId: student.studentId})
  const r = await mysqldb.save(exam);
  const n = await mysqldb.update(exam, {course: 'bio'});

  console.log(student);
  console.log(r);
}
create();
