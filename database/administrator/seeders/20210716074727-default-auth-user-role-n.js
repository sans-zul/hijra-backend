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
    return await queryInterface.bulkInsert('auth_user_role_ns', [
      {
        id: 1,
        user_role_id: 1,
        user_role_is_default: 1,
        account_id: 1,
        account_user_id: 1,
        account_username: "dev",
        account_password: "32a398d0b65ad52f35f1d865072ba1bda9f4a0de",
        account_email: "admin@sanjari.dev",
        user_id : 1,
        user_name: "Sanjari Dev",
        user_tanggal_lahir: new Date("1998-07-10"),
        user_gender: "Male",
        user_image: "default.jpg",
        group_id: 1,
        group_name: 'Administrator',
        group_description: '',
        group_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        user_role_id: 2,
        user_role_is_default : 0,
        account_id : 1,
        account_user_id: 1,
        account_username: "dev",
        account_password: "32a398d0b65ad52f35f1d865072ba1bda9f4a0de",
        account_email: "admin@sanjari.dev",
        user_id : 1,
        user_name: "Sanjari Dev",
        user_tanggal_lahir: new Date("1998-07-10"),
        user_gender: "Male",
        user_image: "default.jpg",
        group_id : 2,
        group_name: 'Admin',
        group_description: '',
        group_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        user_role_id: 3,
        user_role_is_default : 0,
        account_id : 1,
        account_user_id: 1,
        account_username: "dev",
        account_password: "32a398d0b65ad52f35f1d865072ba1bda9f4a0de",
        account_email: "admin@sanjari.dev",
        user_id : 1,
        user_name: "Sanjari Dev",
        user_tanggal_lahir: new Date("1998-07-10"),
        user_gender: "Male",
        user_image: "default.jpg",
        group_id : 3,
        group_name: 'Dashboard',
        group_description: '',
        group_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        user_role_id : 4,
        user_role_is_default : 1,
        account_id : 2,
        account_user_id : 2,
        account_username: 'admin',
        account_password : require('./../../../app/helpers/shaFunction')("2-!P@ssw0rd"),
        account_email: `admin@${process.env.APP_NAME.toLowerCase() || 'sanari'}.id`,
        user_id : 2,
        user_name: "Admin",
        user_tanggal_lahir: new Date(),
        user_gender: "Male",
        user_image: "default.jpg",
        group_id : 2,
        group_name: 'Admin',
        group_description: '',
        group_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        user_role_id : 5,
        user_role_is_default : 0,
        account_id : 2,
        account_user_id : 2,
        account_username: 'admin',
        account_password : require('./../../../app/helpers/shaFunction')("2-!P@ssw0rd"),
        account_email: `admin@${process.env.APP_NAME.toLowerCase() || 'sanari'}.id`,
        user_id : 2,
        user_name: "Admin",
        user_tanggal_lahir: new Date(),
        user_gender: "Male",
        user_image: "default.jpg",
        group_id : 3,
        group_name: 'Dashboard',
        group_description: '',
        group_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        user_role_id: 6,
        user_role_is_default : 1,
        account_id : 3,
        account_user_id : 3,
        account_username: 'dashboard',
        account_password : require('./../../../app/helpers/shaFunction')("3-!P@ssw0rd"),
        account_email: `dashboard@${process.env.APP_NAME.toLowerCase() || 'sanari'}.id`,
        user_id : 3,
        user_name: "Dashboard",
        user_tanggal_lahir: new Date(),
        user_gender: "Male",
        user_image: "default.jpg",
        group_id : 3,
        group_name: 'Dashboard',
        group_description: '',
        group_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        user_role_id: 7,
        user_role_is_default : 1,
        account_id : 4,
        account_user_id : 4,
        account_username: 'api',
        account_password : require('./../../../app/helpers/shaFunction')("4-!P@ssw0rd"),
        account_email: `api@${process.env.APP_NAME.toLowerCase() || 'sanari'}.id`,
        user_id : 1,
        user_name: "API",
        user_tanggal_lahir: new Date(),
        user_gender: "Male",
        user_image: "default.jpg",
        group_id : 4,
        group_name: 'API',
        group_description: '',
        group_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        user_role_id: 8,
        user_role_is_default : 0,
        account_id : 1,
        account_user_id: 1,
        account_username: "dev",
        account_password: "32a398d0b65ad52f35f1d865072ba1bda9f4a0de",
        account_email: "admin@sanjari.dev",
        user_id : 1,
        user_name: "Sanjari Dev",
        user_tanggal_lahir: new Date("1998-07-10"),
        user_gender: "Male",
        user_image: "default.jpg",
        group_id : 4,
        group_name: 'API',
        group_description: '',
        group_by: 1,
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
    return await queryInterface.bulkDelete('auth_user_role_ns', null, {});
  }
};
