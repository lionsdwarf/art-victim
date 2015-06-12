"use strict";
module.exports = function(sequelize, DataTypes) {
  var compositionGraphics = sequelize.define("composition_graphics", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Valid composition graphic name required'}
      }
    },
    data_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Valid composition graphic data_name required'}
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Valid composition graphic type required'}
      }
    },
    url: {
      type: DataTypes.TEXT
    },
    user_input: {
      type: DataTypes.STRING
    },
    left: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Left value required'}
      }
    },
    top: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Top value required'}
      }
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Width value required'}
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Height value required'}
      }
    },
    z_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Z_index value required'}
      }
    },
    greyscale: {
      type: DataTypes.BOOLEAN
    },
    composition_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, 
  {
    underscored: true,
    classMethods: {
      associate: function(models) {
        compositionGraphics.belongsTo(models.compositions, { foreignKey: 'composition_id'} );
      }
    }
  });
  return compositionGraphics;
};