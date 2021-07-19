'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('auth_user_role_ns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_role_id: {
        type: Sequelize.INTEGER
      },
      user_role_is_default: {
        type: Sequelize.INTEGER
      },
      account_id: {
        type: Sequelize.INTEGER
      },
      account_user_id: {
        type: Sequelize.INTEGER
      },
      account_username: {
        type: Sequelize.STRING
      },
      account_password: {
        type: Sequelize.STRING
      },
      account_email: {
        type: Sequelize.STRING
      },
      user_id : {
        type: Sequelize.INTEGER
      },
      user_name: {
        type: Sequelize.STRING
      },
      user_tanggal_lahir: {
        type: Sequelize.DATE
      },
      user_gender: {
        type: Sequelize.STRING
      },
      user_image: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('auth_user_role_ns');
  }
};