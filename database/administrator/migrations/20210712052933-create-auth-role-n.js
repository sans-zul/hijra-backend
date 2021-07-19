'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('auth_role_ns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_default: {
        type: Sequelize.INTEGER
      },
      group_id: {
        type: Sequelize.INTEGER
      },
      group_name: {
        type: Sequelize.STRING
      },
      group_description: {
        type: Sequelize.STRING
      },
      group_by: {
        type: Sequelize.INTEGER
      },
      pa_id: {
        type: Sequelize.INTEGER
      },
      pa_data_argument: {
        type: Sequelize.TEXT
      },
      pa_url_pattern: {
        type: Sequelize.STRING
      },
      pa_p_id: {
        type: Sequelize.INTEGER
      },
      pa_p_metode: {
        type: Sequelize.STRING
      },
      pa_p_title: {
        type: Sequelize.STRING
      },
      pa_p_application_id: {
        type: Sequelize.INTEGER
      },
      pa_p_application_name: {
        type: Sequelize.STRING
      },
      pa_p_application_prefix: {
        type: Sequelize.STRING
      },
      pa_p_application_description: {
        type: Sequelize.STRING
      },
      pa_p_modul_id: {
        type: Sequelize.INTEGER
      },
      pa_p_modul_name: {
        type: Sequelize.STRING
      },
      pa_p_modul_prefix: {
        type: Sequelize.STRING
      },
      pa_p_modul_url_pattern: {
        type: Sequelize.STRING
      },
      pa_p_modul_description: {
        type: Sequelize.STRING
      },
      pa_p_modul_parent_id: {
        type: Sequelize.INTEGER
      },
      pa_p_modul_generation: {
        type: Sequelize.INTEGER
      },
      pa_action_id: {
        type: Sequelize.INTEGER
      },
      pa_action_name: {
        type: Sequelize.STRING
      },
      pa_action_prefix: {
        type: Sequelize.STRING
      },
      pa_action_data: {
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
    await queryInterface.dropTable('auth_role_ns');
  }
};