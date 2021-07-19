'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hijra_quran_suggest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hijra_quran_suggest.init({
    daily: DataTypes.BOOLEAN,
    weekly: DataTypes.BOOLEAN,
    range_date: DataTypes.BOOLEAN,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    day: DataTypes.DATE,
    priority: DataTypes.INTEGER,
    surah: DataTypes.STRING,
    start_ayat: DataTypes.INTEGER,
    end_ayat: DataTypes.INTEGER,
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hijra_quran_suggest',
  });
  return hijra_quran_suggest;
};