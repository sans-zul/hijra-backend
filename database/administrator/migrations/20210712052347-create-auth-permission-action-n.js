'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('auth_permission_action_ns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_argument: {
        type: Sequelize.TEXT
      },
      url_pattern: {
        type: Sequelize.STRING
      },
      permission_id: {
        type: Sequelize.INTEGER
      },
      permission_metode: {
        type: Sequelize.STRING
      },
      permission_title: {
        type: Sequelize.STRING
      },
      p_application_id: {
        type: Sequelize.INTEGER
      },
      p_application_name: {
        type: Sequelize.STRING
      },
      p_application_prefix: {
        type: Sequelize.STRING
      },
      p_application_description: {
        type: Sequelize.STRING
      },
      p_modul_id: {
        type: Sequelize.INTEGER
      },
      p_modul_name: {
        type: Sequelize.STRING
      },
      p_modul_prefix: {
        type: Sequelize.STRING
      },
      p_modul_url_pattern: {
        type: Sequelize.STRING
      },
      p_modul_description: {
        type: Sequelize.STRING
      },
      p_modul_parent_id: {
        type: Sequelize.INTEGER
      },
      p_modul_generation: {
        type: Sequelize.INTEGER
      },
      action_id: {
        type: Sequelize.INTEGER
      },
      action_name: {
        type: Sequelize.STRING
      },
      action_prefix: {
        type: Sequelize.STRING
      },
      action_data: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('auth_permission_action_ns');
  }
};