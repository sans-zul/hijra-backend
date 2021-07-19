'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hijra_save_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hijra_save_post.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    tanggal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'hijra_save_post',
  });
  return hijra_save_post;
};