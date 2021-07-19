'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_menu.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    parent_id: DataTypes.INTEGER,
    permission_action_id: DataTypes.INTEGER,
    sorter: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'auth_menu',
  });
  return auth_menu;
};