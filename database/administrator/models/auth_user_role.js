'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_user_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_user_roles.init({
    account_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER,
    is_default: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'auth_user_role',
  });
  return auth_user_roles;
};