"use strict";
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable("composition_graphics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      data_name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.TEXT
      },
      user_input: {
        type: Sequelize.STRING
      },
      left: {
        type: Sequelize.INTEGER
      },
      top: {
        type: Sequelize.INTEGER
      },
      width: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.INTEGER
      },
      z_index: {
        type: Sequelize.INTEGER
      },
      greyscale: {
        type: Sequelize.BOOLEAN
      },
      composition_id: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).done();
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable("composition_graphics");
  }
};