'use strict';

const { Sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn("posts", "status", {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("posts", "status")
  }
};
