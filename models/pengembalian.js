'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pengembalian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pengembalian.init({
    pengembalian_id: DataTypes.STRING,
    peminjaman_id: DataTypes.STRING,
    tanggal_pengembalian: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pengembalian',
  });
  return Pengembalian;
};