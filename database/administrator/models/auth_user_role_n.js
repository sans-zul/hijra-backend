'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_user_role_n extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_user_role_n.init({
    user_role_id: DataTypes.INTEGER,
    user_role_is_default: DataTypes.INTEGER,
    account_id: DataTypes.INTEGER,
    account_user_id: DataTypes.INTEGER,
    account_username: DataTypes.STRING,
    account_password: DataTypes.STRING,
    account_email: DataTypes.STRING,
    user_id : DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    user_tanggal_lahir: DataTypes.DATE,
    user_gender: DataTypes.STRING,
    user_image: DataTypes.STRING,
    group_id: DataTypes.INTEGER,
    group_name: DataTypes.STRING,
    group_description: DataTypes.STRING,
    group_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'auth_user_role_n',
  });
  return auth_user_role_n;
};