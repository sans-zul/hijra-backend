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
   
    return await queryInterface.bulkInsert('hijra_users', 
     [
       {
          id : 1,
          gender: "Male",
          image: "default.jpg",
          name: "Default User API",
          email: `default@api.${process.env.APP_NAME.toLowerCase().replace(" ","")}.id`,
          phone: "62810000000000",
          gender: "Male",
          image: "default.jpg",
          bio: "",
          tanggal_lahir: new Date("1998-07-10"),
          followers: 0,
          following: 0,
          post: 0,
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
    return await queryInterface.bulkDelete('hijra_users', null, {});
  }
};
