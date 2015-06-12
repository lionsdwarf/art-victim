"use strict";
module.exports = function(sequelize, DataTypes) {
  var compositions = sequelize.define("compositions", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Valid composition title required'}
      }
    },
    data_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Valid composition title required'}
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, 
  {
    underscored: true,
    classMethods: {
      associate: function(models) {
        compositions.belongsTo(models.users, { foreignKey: 'user_id'} );
        compositions.hasMany(models.composition_graphics, { foreignKey: 'composition_id'} );
      }
    }
  });
  return compositions;
};