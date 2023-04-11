#!/usr/bin/node
const { Sequelize } = require('sequelize');
const { Student, StudentRecords } = require('../student_details')
const { Examiner, ExaminerRecords } = require('../examiner')

const database = process.env.EXAMIO_DB || 'examio_db';
const user = process.env.EXAMIO_USER || 'examio';
const pwd = process.env.EXAMIO_PWD || 'examio_v1.0';
const port = process.env.EXAMIO_PORT || 3306;
const sequelize = new Sequelize(database, user, pwd, {
  port,
  host: 'localhost',
  dialect: 'mysql',
});

class MysqlClient {
  
  constructor() {
    this.mysqlClient = sequelize;
  }

  async createTables() {
    await this.mysqlClient.sync({ force: true });
  }

  async isAlive() {
    /* check connection */
    try {
      await this.mysqlClient.authenticate();
      console.log('Connection has been established');
    } catch (err) {
      console.log(`MySQL client is not connected ${err}`);
    }
  }

  async createModel(model, obj, field = null) {
    /* create a new set of attributes for a model
     * fields = an array of attributes which specifies
     * which attribute of the obj to create. if null
     * all the attr of obj will be created
     */
    if (field !== null) {
      const newRecord = await model.create(obj, { fields: field });
      return newRecord.dataValues;
    }
    const newRecord = await model.create(obj);
    return newRecord.dataValues;
  }

  async selectAll(model, field = null) {
    /* selectAll returns all rows in a table
     * 
     * if field is null: return all the columns ( SELECT * ...)
     * else: the specified fields are returned: ( SELECT foo, bar ...)
     */
    if (field !== null) {
      const allRecords = await model.findAll({ raw: true, attributes: field });
      return allRecords;
    }
    const allRecords = await model.findAll({ raw: true });
    return allRecords;
  }

  async save(tableInstance) {
    /* save changes made on a table instance */
    const obj = await tableInstance.save();
    return obj.dataValues;
  }

  async update(tableInstance, obj) {
    /* updates a table instance according to the obj specified */
    const updatedObj = await tableInstance.update(obj);
    return { updated: updatedObj.dataValues };
  }

  async del(tableInstance) {
    const obj = await tableInstance.destroy();
    return { deleted: obj.dataValues };
  }

  async reload(tableInstance) {
    const obj = await tableInstance.reload()
    return obj;
  }

  async userExists(table, email) {
    const user = table.findOne({ where: { email: email }});
    if (!user) return false;
    return true;
  }
}

const mysqldb = new MysqlClient();
mysqldb.isAlive();

module.exports = { mysqldb, sequelize, MysqlClient };
