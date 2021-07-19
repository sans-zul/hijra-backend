'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('auth_permission_actions', [
      {
        id: 1,
        permission_id : 1,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/auth",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        permission_id : 2,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/auth/login",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        permission_id : 3,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/auth/login",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        permission_id : 4,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/auth/register",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        permission_id : 5,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/auth/register",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        permission_id : 6,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/auth/logout",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        permission_id : 7,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/administrator",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        permission_id : 8,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        permission_id : 9,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/dashboard",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        permission_id : 10,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/administrator/profile",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        permission_id : 11,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/admin/profile",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        permission_id : 12,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/dashboard/profile",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        permission_id : 13,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/admin/api",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        permission_id : 14,
        action_id : 1,
        data_argument : JSON.stringify([]),
        url_pattern : "/admin/api/profile",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('auth_permission_actions', null, {});
  }
};
