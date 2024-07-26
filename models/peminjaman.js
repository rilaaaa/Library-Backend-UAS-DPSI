'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peminjaman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Peminjaman.init({
    peminjaman_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    buku_id: DataTypes.STRING,
    tanggal_peminjaman: DataTypes.DATE,
    tanggal_pengembalian: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Peminjaman',
  });
  return Peminjaman;
};