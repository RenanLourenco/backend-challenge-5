'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Categorias','cor', {
        allowNull:false,
        type: Sequelize.STRING,
        unique:true,
        validate:{
          is:/^#([0-9a-f]{3}){1,2}$/i,
          isIn:[['aqua','cyan','black','blue','fuchsia','magenta','gray','green','lime','maroon','navy','olive','purple','red','silver','teal','white','yellow']]
        }
       });
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
