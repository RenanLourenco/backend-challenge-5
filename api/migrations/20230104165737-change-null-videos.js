'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.changeColumn('Videos','titulo', { allowNull:false,type: Sequelize.STRING });
   await queryInterface.changeColumn('Videos','descricao', {allowNull:false,type: Sequelize.STRING })
   await queryInterface.changeColumn('Videos','url', {allowNull:false,type: Sequelize.STRING })
   await queryInterface.changeColumn('Videos','categoriaId', {allowNull:false,type: Sequelize.INTEGER, references:{model:'Categorias', key:'id'} })

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
