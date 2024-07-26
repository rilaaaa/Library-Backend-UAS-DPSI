'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anggota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Anggota.init({
    user_id: DataTypes.STRING,
    nim: DataTypes.STRING,
    nama: DataTypes.STRING,
    prodi: DataTypes.STRING,
    fakultas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Anggota',
  });
  return Anggota;
};