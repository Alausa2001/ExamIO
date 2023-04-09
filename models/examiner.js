const { Sequelize, DataTypes } = require('sequelize');
const { mysqldb, sequelize } = require('./engine/db');

class Examiner extends Sequelize.Model {}

/* examiner model */
Examiner.init({
  firstName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false,
  },
  examinerId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true,
  },
}, {
  sequelize,
  tableName: 'examiner',
  modelName: 'Examiner',
  timestamp: true,
});

/* Exam Records */
class ExaminerRecords extends Sequelize.Model {}

ExaminerRecords.init({
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
  examId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'examiner_records',
  modelName: 'ExaminerRecords',
  timestamp: true,
});

/* Examine and ExaminerRecords relationship (one-to-many) */

Examiner.hasMany(ExaminerRecords);
ExaminerRecords.belongsTo(Examiner, {
  foreignKey: {
    name: 'examinerId',
    allowNull: false,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
});

async function create() {
  await mysqldb.createTables();
  // await sequelize.sync({ force: true });
  let examiner = Examiner.build({firstName: 'wale', lastName: 'adebisi', email: 'wale@gmail', password: 'adenuga2001'});
  examiner = await mysqldb.save(examiner);




  const exam = ExaminerRecords.build({date: '11', course: 'math', examinerId: examiner.examinerId})
  const r = await mysqldb.save(exam);
  const n = await mysqldb.update(exam, {course: 'bio'});

  console.log(examiner);
  console.log(r);
}
create();
