'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_modul extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_modul.init({
    name: DataTypes.STRING,
    prefix: DataTypes.STRING,
    url_pattern: DataTypes.STRING,
    description: DataTypes.STRING,
    generation: DataTypes.INTEGER,
    parent_id: DataTypes.INTEGER
  }, {
    paranoid : true,
    sequelize,
    modelName: 'auth_modul',
  });
  return auth_modul;
};