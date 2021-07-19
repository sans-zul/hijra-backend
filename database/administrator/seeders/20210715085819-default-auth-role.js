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
    return await queryInterface.bulkInsert('auth_roles', [
      {
        id: 1,
        group_id : 1,
        permission_action_id : 7,
        is_default : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        group_id : 2,
        permission_action_id : 8,
        is_default : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        group_id : 3,
        permission_action_id : 9,
        is_default : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        group_id : 1,
        permission_action_id : 10,
        is_default : 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        group_id : 2,
        permission_action_id : 11,
        is_default : 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        group_id : 3,
        permission_action_id : 12,
        is_default : 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        group_id : 1,
        permission_action_id : 6,
        is_default : 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        group_id : 2,
        permission_action_id : 6,
        is_default : 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        group_id : 3,
        permission_action_id : 6,
        is_default : 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        group_id : 4,
        permission_action_id : 13,
        is_default : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        group_id : 4,
        permission_action_id : 14,
        is_default : 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // {
      //   id: 12,
      //   group_id : 4,
      //   permission_action_id : 6,
      //   is_default : 0,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('auth_roles', null, {});
  }
};
