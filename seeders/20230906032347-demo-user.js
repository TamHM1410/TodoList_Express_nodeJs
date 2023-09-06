"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     await queryInterface.bulkInsert('People', [{
       name: 'John Doe',
       isBetaMember: false
      }], {});
    */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          userName: "JohnDoe",
          email: "johnDoe@gg.com",
          pass: "123456",
        },
        {
          userName: "Faker",
          email: "Faker@lol.gg",
          pass: "123456",
        },
        {
          userName: "hunhmihtam",
          email: "hunhmihtamdeptrai",
          pass: "123456",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
