'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_permission.init({
    application_id: DataTypes.INTEGER,
    modul_id: DataTypes.INTEGER,
    metode: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    paranoid : true,
    sequelize,
    modelName: 'auth_permission',
  });
  return auth_permission;
};