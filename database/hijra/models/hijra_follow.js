'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hijra_follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hijra_follow.init({
    from_id: DataTypes.INTEGER,
    to_id: DataTypes.INTEGER,
    waktu_follow: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'hijra_follow',
  });
  return hijra_follow;
};