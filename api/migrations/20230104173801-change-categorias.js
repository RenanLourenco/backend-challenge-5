'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Categorias','titulo', { allowNull:false,type: Sequelize.STRING });
    await queryInterface.changeColumn('Categorias','cor', { allowNull:false,type: Sequelize.STRING });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
