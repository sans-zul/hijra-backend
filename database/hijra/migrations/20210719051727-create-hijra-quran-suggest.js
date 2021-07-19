'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hijra_quran_suggests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      daily: {
        type: Sequelize.BOOLEAN
      },
      weekly: {
        type: Sequelize.BOOLEAN
      },
      range_date: {
        type: Sequelize.BOOLEAN
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      start_time: {
        type: Sequelize.TIME
      },
      end_time: {
        type: Sequelize.TIME
      },
      day: {
        type: Sequelize.DATE
      },
      priority: {
        type: Sequelize.INTEGER
      },
      surah: {
        type: Sequelize.STRING
      },
      start_ayat: {
        type: Sequelize.INTEGER
      },
      end_ayat: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      subtitle: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hijra_quran_suggests');
  }
};