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
   
    return await queryInterface.bulkInsert('auth_users', 
      [
        {
          id : 1,
          name: "Sanjari Dev",
          tanggal_lahir: new Date("1998-07-10"),
          gender: "Male",
          image: "default.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Admin',
          tanggal_lahir: new Date(),
          gender: "Male",
          image: "default.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'Dashboard',
          tanggal_lahir: new Date(),
          gender: "Male",
          image: "default.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'API',
          tanggal_lahir: new Date(),
          gender: "Male",
          image: "default.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('auth_users', null, {});
  }
};
