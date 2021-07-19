'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hijra_comment_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hijra_comment_post.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    parent_id: DataTypes.INTEGER,
    waktu_comment: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hijra_comment_post',
  });
  return hijra_comment_post;
};