'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_users.init({
    name: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    gender: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'auth_user',
  });
  return auth_users;
};