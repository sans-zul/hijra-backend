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
    return await queryInterface.bulkInsert('auth_user_roles', [
      {
        id: 1,
        account_id : 1,
        group_id : 1,
        is_default : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        account_id : 1,
        group_id : 2,
        is_default : 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        account_id : 1,
        group_id : 3,
        is_default : 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        account_id : 2,
        group_id : 2,
        is_default : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        account_id : 2,
        group_id : 3,
        is_default : 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        account_id : 3,
        group_id : 3,
        is_default : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        account_id : 4,
        group_id : 4,
        is_default : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        account_id : 1,
        group_id : 4,
        is_default : 0,
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
    return await queryInterface.bulkDelete('auth_user_roles', null, {});
  }
};
