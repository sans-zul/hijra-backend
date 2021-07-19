'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('auth_permission_ns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      metode: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      application_id: {
        type: Sequelize.INTEGER
      },
      application_name: {
        type: Sequelize.STRING
      },
      application_prefix: {
        type: Sequelize.STRING
      },
      application_description: {
        type: Sequelize.STRING
      },
      modul_id: {
        type: Sequelize.INTEGER
      },
      modul_name: {
        type: Sequelize.STRING
      },
      modul_prefix: {
        type: Sequelize.STRING
      },
      modul_url_pattern: {
        type: Sequelize.STRING
      },
      modul_description: {
        type: Sequelize.STRING
      },
      modul_parent_id: {
        type: Sequelize.INTEGER
      },
      modul_generation: {
        type: Sequelize.INTEGER
      },
      deletedAt: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('auth_permission_ns');
  }
};