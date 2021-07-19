'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_permission_n extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_permission_n.init({
    metode: DataTypes.STRING,
    title: DataTypes.STRING,
    application_id: DataTypes.INTEGER,
    application_name: DataTypes.STRING,
    application_prefix: DataTypes.STRING,
    application_description: DataTypes.STRING,
    modul_id: DataTypes.INTEGER,
    modul_name: DataTypes.STRING,
    modul_prefix: DataTypes.STRING,
    modul_url_pattern: DataTypes.STRING,
    modul_description: DataTypes.STRING,
    modul_parent_id: DataTypes.INTEGER,
    modul_generation: DataTypes.INTEGER
  }, {
    paranoid : true,
    sequelize,
    modelName: 'auth_permission_n',
  });
  return auth_permission_n;
};