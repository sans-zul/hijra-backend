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
    
    return await queryInterface.bulkInsert('auth_accounts', 
      [
        {
          id : 1,
          user_id: 1,
          username: "dev",
          password: "32a398d0b65ad52f35f1d865072ba1bda9f4a0de",
          email: "admin@sanjari.dev",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          user_id : 2,
          username: 'admin',
          password : require('./../../../app/helpers/shaFunction')("2-!P@ssw0rd"),
          email: `admin@${process.env.APP_NAME.toLowerCase().replace(" ", "") || 'sanari'}.id`,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          user_id : 3,
          username: 'dashboard',
          password : require('./../../../app/helpers/shaFunction')("3-!P@ssw0rd"),
          email: `dashboard@${process.env.APP_NAME.toLowerCase().replace(" ", "") || 'sanari'}.id`,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          user_id : 4,
          username: 'api',
          password : require('./../../../app/helpers/shaFunction')("4-!P@ssw0rd"),
          email: `api@${process.env.APP_NAME.toLowerCase().replace(" ", "") || 'sanari'}.id`,
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
    return await queryInterface.bulkDelete('auth_accounts', null, {});
  }
};
