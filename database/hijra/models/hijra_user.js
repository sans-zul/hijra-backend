'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hijra_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hijra_user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING,
    image: DataTypes.STRING,
    bio: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    followers: DataTypes.INTEGER,
    following: DataTypes.INTEGER,
    post: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hijra_user',
  });
  return hijra_user;
};