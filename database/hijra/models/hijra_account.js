'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hijra_account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hijra_account.init({
    email: DataTypes.STRING,
    password_email: DataTypes.STRING,
    password_google: DataTypes.STRING,
    password_facebook: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hijra_account',
  });
  return hijra_account;
};