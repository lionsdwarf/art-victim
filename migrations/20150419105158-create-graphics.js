"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("graphics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        unique: true
      },
      url: {
        type: DataTypes.TEXT,
        unique: true
      },
      library_id: {
        type: DataTypes.INTEGER
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("graphics").done(done);
  }
};