"use strict";
module.exports = function(sequelize, DataTypes) {
  var libraryGraphics = sequelize.define("library_graphics", {
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {msg: 'Valid graphic name required'}
      }
    },
    data_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {msg: 'Valid graphic data_name required'}
      }
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {msg: 'Valid graphic url required'}
      }
    }, 
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Valid graphic type required'}
      }      
    },
    library_id: {
      type: DataTypes.INTEGER
    }
  }, 
  {
    underscored: true,
    instanceMethods: {},
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        libraryGraphics.belongsTo(models.libraries, { foreignKey: 'library_id'});
      }
    }
  });
  return libraryGraphics;
};