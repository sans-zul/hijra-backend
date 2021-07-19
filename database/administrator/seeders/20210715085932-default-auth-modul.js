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
    return await queryInterface.bulkInsert('auth_moduls', [
      {
        id: 1,
        name: 'Index',
        prefix: '',
        url_pattern: '',
        description: '',
        parent_id : 0,
        generation : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Login',
        prefix: 'login',
        url_pattern: '/login',
        description: '',
        parent_id : 0,
        generation : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Register',
        prefix: 'register',
        url_pattern: '/register',
        description: '',
        parent_id : 0,
        generation : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Logout',
        prefix: 'logout',
        url_pattern: '/logout',
        description: '',
        parent_id : 0,
        generation : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Profile',
        prefix: 'profile',
        url_pattern: '/profile',
        description: '',
        parent_id : 0,
        generation : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'API',
        prefix: 'api',
        url_pattern: '/api',
        description: '',
        parent_id : 0,
        generation : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'API Profile',
        prefix: 'profile',
        url_pattern: '/api/profile',
        description: '',
        parent_id : 6,
        generation : 2,
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
    return await queryInterface.bulkDelete('auth_moduls', null, {});
  }
};
