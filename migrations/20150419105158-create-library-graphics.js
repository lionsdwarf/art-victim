"use strict";
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable("library_graphics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      data_name: {
        type: Sequelize.STRING,
        unique: true
      },
      url: {
        type: Sequelize.TEXT,
        unique: true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      library_id: {
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
    return queryInterface.dropTable("graphics");
  }
};