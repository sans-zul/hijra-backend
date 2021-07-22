'use strict';
require('dotenv').config();
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
   
    return await queryInterface.bulkInsert('hijra_accounts', 
     [
       {
         id : 1,
         user_id: 1,
         email: `default@api.${process.env.APP_NAME.toLowerCase().replace(" ","")}.id`,
         password_email : require('./../../../app/helpers/shaFunction')("1-!P@ssw0rd"),
         password_google: "",
         password_facebook: "",
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
    return await queryInterface.bulkDelete('hijra_accounts', null, {});
  }
};
