'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Buku.init({
    buku_id: DataTypes.STRING,
    isbn: DataTypes.STRING,
    judul: DataTypes.STRING,
    pengarang: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    kategori: DataTypes.STRING,
    tahun: DataTypes.INTEGER,
    jumlah_buku: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Buku',
  });
  return Buku;
};