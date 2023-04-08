const { Sequelize, DataTypes } = require('sequeize');
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
  pwd: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
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
  },
}, {
  sequelize,
  tableName: 'examiner',
  modelName: 'Examiner',
  timestamp: true,
});


