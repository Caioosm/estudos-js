'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('alunos', 'sobreNome', 'sobrenome');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('alunos', 'sobrenome', 'sobreNome');
  }
};
