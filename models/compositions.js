"use strict";
module.exports = function(sequelize, DataTypes) {
  var compositions = sequelize.define("compositions", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Valid composition name required'}
      }
    },
    composition: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Valid composition required'}
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
      }
    }
  });
  return compositions;
};