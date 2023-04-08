#!/usr/bin/node

const { Sequelize } = require('sequelize');

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
    await this.mysqlClient.sync({ force: false });
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
}

const mysqldb = new MysqlClient();
mysqldb.isAlive();

module.exports = { mysqldb, sequelize };
