'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Usuarios','email', {allowNull:false,unique:true,type: Sequelize.INTEGER})
    await queryInterface.changeColumn('Usuarios','password', {allowNull:false,type: Sequelize.INTEGER})

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
