'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_role_n extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_role_n.init({
    is_default: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER,
    group_name: DataTypes.STRING,
    group_description: DataTypes.STRING,
    group_by: DataTypes.INTEGER,
    pa_id: DataTypes.INTEGER,
    pa_data_argument: DataTypes.TEXT,
    pa_url_pattern: DataTypes.STRING,
    pa_p_id: DataTypes.INTEGER,
    pa_p_metode: DataTypes.STRING,
    pa_p_title: DataTypes.STRING,
    pa_p_application_id: DataTypes.INTEGER,
    pa_p_application_name: DataTypes.STRING,
    pa_p_application_prefix: DataTypes.STRING,
    pa_p_application_description: DataTypes.STRING,
    pa_p_modul_id: DataTypes.INTEGER,
    pa_p_modul_name: DataTypes.STRING,
    pa_p_modul_prefix: DataTypes.STRING,
    pa_p_modul_url_pattern: DataTypes.STRING,
    pa_p_modul_description: DataTypes.STRING,
    pa_p_modul_parent_id: DataTypes.INTEGER,
    pa_p_modul_generation: DataTypes.INTEGER,
    pa_action_id: DataTypes.INTEGER,
    pa_action_name: DataTypes.STRING,
    pa_action_prefix: DataTypes.STRING,
    pa_action_data: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'auth_role_n',
  });
  return auth_role_n;
};