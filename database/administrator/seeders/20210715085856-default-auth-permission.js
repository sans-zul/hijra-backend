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
    return await queryInterface.bulkInsert('auth_permissions', [
      {
        id: 1,
        application_id: 1,
        modul_id: 1,
        metode: 'GET',
        title: "Auth",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        application_id: 1,
        modul_id: 2,
        metode: 'GET',
        title: "Login",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        application_id: 1,
        modul_id: 2,
        metode: 'POST',
        title: "Login",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        application_id: 1,
        modul_id: 3,
        metode: 'GET',
        title: "Register",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        application_id: 1,
        modul_id: 3,
        metode: 'POST',
        title: "Register",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        application_id: 1,
        modul_id: 4,
        metode: 'GET',
        title: "Logout",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        application_id: 2,
        modul_id: 1,
        metode: 'GET',
        title: "Administrator",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        application_id: 3,
        modul_id: 1,
        metode: 'GET',
        title: "Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        application_id: 4,
        modul_id: 1,
        metode: 'GET',
        title: "Dashboard",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        application_id: 2,
        modul_id: 5,
        metode: 'GET',
        title: "Profile",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        application_id: 3,
        modul_id: 5,
        metode: 'GET',
        title: "Profile",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        application_id: 4,
        modul_id: 5,
        metode: 'GET',
        title: "Profile",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        application_id: 3,
        modul_id: 6,
        metode: 'GET',
        title: "Rest API",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        application_id: 3,
        modul_id: 7,
        metode: 'GET',
        title: "Profile Rest API",
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
    return await queryInterface.bulkDelete('auth_permissions', null, {});
  }
};
