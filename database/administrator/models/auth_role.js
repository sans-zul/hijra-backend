'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_role.init({
    group_id: DataTypes.INTEGER,
    permission_action_id: DataTypes.INTEGER,
    is_default: DataTypes.INTEGER
  }, {
    // hooks : {
    //   afterCreate : (role, opt) => {
    //     console.log(role);
    //   }
    // },
    sequelize,
    modelName: 'auth_role',
  });
  return auth_role;
};