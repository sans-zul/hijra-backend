'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hijra_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hijra_post.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    waktu_posting: DataTypes.DATE,
    media: DataTypes.TEXT,
    author: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    view: DataTypes.INTEGER,
    like: DataTypes.INTEGER,
    comment: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hijra_post',
  });
  return hijra_post;
};