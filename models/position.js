'use strict';
const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    static associate(models) {
      Position.hasMany(models.Employee, {foreignKey: "PositionId"})
    }
  }
  Position.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Jabatan tidak boleh kosong'
        },
        notEmpty: {
          msg: 'Jabatan tidak boleh kosong'
        }
      }
    },
  }, {
    hooks: {
      beforeCreate: (el) => {
        el.id = uuidv4();
      }
    },
    sequelize,
    modelName: 'Position',
  });
  return Position;
};