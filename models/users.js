"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {msg: 'Valid user name required'}
      }
    },
    pswd_digest: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Valid password required'}
      }
    }
  }, 
  {
    underscored: true,
    classMethods: {
      associate: function(models) {
        users.hasMany(models.compositions, { foreignKey: 'user_id'} );
      }
    }
  });
  return users;
};