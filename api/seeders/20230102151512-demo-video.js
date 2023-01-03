'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Videos', [
        {
          titulo:"Video teste2",
          descricao:"esse é um video teste dois",
          url:"https://youtu.be/UiQw2HM4DtM",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          titulo:"Video teste3",
          descricao:"esse é um video teste tres",
          url:"https://youtu.be/dq3hZSOcMhI",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          titulo:"Video teste4",
          descricao:"esse é um video teste quatro",
          url:"https://youtu.be/Cw_GxlFnHTg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('People', null, {});

  }
};
