'use strict';
const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      Employee.belongsTo(models.Branch, {foreignKey : "BranchId", onDelete: 'CASCADE', onUpdate: 'CASCADE'})
      Employee.belongsTo(models.Position, {foreignKey : "PositionID", onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    }
  }
  Employee.init({
    id: DataTypes.UUID,
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Nama depan tidak boleh kosong'
        },
        notEmpty: {
          msg: 'Nama depan tidak boleh kosong'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Nama belakang tidak boleh kosong'
        },
        notEmpty: {
          msg: 'Nama belakang tidak boleh kosong'
        }
      }
    },
    BranchId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Cabang tidak boleh kosong'
        },
        notEmpty: {
          msg: 'Cabang tidak boleh kosong'
        }
      }
    },
    PositionID: {
      type: DataTypes.UUID,
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
    startDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Tanggal mulai tidak boleh kosong'
        },
        notEmpty: {
          msg: 'Tanggal mulai tidak boleh kosong'
        }
      }
    },
    endDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Tanggal selesai tidak boleh kosong'
        },
        notEmpty: {
          msg: 'Tanggal selesai tidak boleh kosong'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (el) => {
        el.id = uuidv4();
      }
    },
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};