'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_permission_action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_permission_action.init({
    permission_id: DataTypes.INTEGER,
    action_id: DataTypes.INTEGER,
    data_argument: DataTypes.TEXT,
    url_pattern: DataTypes.STRING
  }, {
    paranoid : true,
    sequelize,
    modelName: 'auth_permission_action',
  });
  return auth_permission_action;
};