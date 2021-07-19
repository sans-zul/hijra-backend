'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hijra_calendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hijra_calendar.init({
    tanggal: DataTypes.DATE,
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hijra_calendar',
  });
  return hijra_calendar;
};