"use strict";
module.exports = function(sequelize, DataTypes) {
  var libraries = sequelize.define("libraries", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: { msg: 'Valid library name required',
        }
      }
    },
    data_name: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: { msg: 'Valid library data_name required',
        }
      }
    }
   },  
  {
    underscored: true,
    instanceMethods: {},
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        libraries.hasMany(models.library_graphics, { foreignKey: 'library_id'});
      }
    }
  });
  return libraries;
};