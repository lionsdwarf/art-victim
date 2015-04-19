"use strict";
module.exports = function(sequelize, DataTypes) {
  var graphics = sequelize.define("graphics", {
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {msg: 'Valid graphic name required'}
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
        graphics.belongsTo(models.libraries, { foreignKey: 'library_id'});
      }
    }
  });
  return graphics;
};