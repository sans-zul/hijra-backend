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
    return await queryInterface.bulkInsert('auth_actions', [
      {
        id: 1,
        name: 'Index',
        prefix: '',
        data: JSON.stringify([]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Datatable',
        prefix: 'datatable',
        data: JSON.stringify([]),
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
    return await queryInterface.bulkDelete('auth_actions', null, {});
  }
};
