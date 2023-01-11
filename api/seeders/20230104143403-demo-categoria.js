'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Categorias', [
        {
          titulo:"Terror",
          cor:"purple",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          titulo:"Aventura",
          cor:"orange",
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
