'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hijra_category_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hijra_category_post.init({
    category_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hijra_category_post',
  });
  return hijra_category_post;
};