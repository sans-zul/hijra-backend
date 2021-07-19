'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_permission_action_n extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_permission_action_n.init({
    data_argument: DataTypes.TEXT,
    url_pattern: DataTypes.STRING,
    permission_id: DataTypes.INTEGER,
    permission_metode: DataTypes.STRING,
    permission_title: DataTypes.STRING,
    p_application_id: DataTypes.INTEGER,
    p_application_name: DataTypes.STRING,
    p_application_prefix: DataTypes.STRING,
    p_application_description: DataTypes.STRING,
    p_modul_id: DataTypes.INTEGER,
    p_modul_name: DataTypes.STRING,
    p_modul_prefix: DataTypes.STRING,
    p_modul_url_pattern: DataTypes.STRING,
    p_modul_description: DataTypes.STRING,
    p_modul_parent_id: DataTypes.INTEGER,
    p_modul_generation: DataTypes.INTEGER,
    action_id: DataTypes.INTEGER,
    action_name: DataTypes.STRING,
    action_prefix: DataTypes.STRING,
    action_data: DataTypes.TEXT
  }, {
    paranoid : true,
    sequelize,
    modelName: 'auth_permission_action_n',
  });
  return auth_permission_action_n;
};