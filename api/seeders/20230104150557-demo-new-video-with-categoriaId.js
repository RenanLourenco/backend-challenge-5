'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Videos', [
      {
        categoriaId:1,
        titulo:"Video com categoria",
        descricao:"esse é um video teste dois",
        url:"https://youtu.be/UiQw2HM4DtM",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoriaId:2,
        titulo:"Video com categoria2",
        descricao:"esse é um video teste tres",
        url:"https://youtu.be/dq3hZSOcMhI",
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
