'use strict';
const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    static associate(models) {
      Branch.hasMany(models.Employee, {foreignKey: "BranchId"})
    }
  }
  Branch.init({
    id: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Nama Cabang tidak boleh kosong'
        },
        notEmpty: {
          msg: 'Nama Cabang tidak boleh kosong'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Branch',
  });
  return Branch;
};