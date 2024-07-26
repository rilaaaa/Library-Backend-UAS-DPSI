'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bukus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buku_id: {
        type: Sequelize.STRING
      },
      isbn: {
        type: Sequelize.STRING
      },
      judul: {
        type: Sequelize.STRING
      },
      pengarang: {
        type: Sequelize.STRING
      },
      penerbit: {
        type: Sequelize.STRING
      },
      kategori: {
        type: Sequelize.STRING
      },
      tahun: {
        type: Sequelize.INTEGER
      },
      jumlah_buku: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bukus');
  }
};