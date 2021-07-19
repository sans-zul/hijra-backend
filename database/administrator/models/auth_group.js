'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_group.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    by: DataTypes.INTEGER
  }, {
    paranoid : true,
    sequelize,
    modelName: 'auth_group',
  });
  return auth_group;
};