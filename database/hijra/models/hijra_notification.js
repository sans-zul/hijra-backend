'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hijra_notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hijra_notification.init({
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    media: DataTypes.TEXT,
    icon: DataTypes.STRING,
    type: DataTypes.STRING,
    tanggal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'hijra_notification',
  });
  return hijra_notification;
};