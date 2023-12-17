'use strict';
const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : {
        msg : 'email sudah terdaftar'
      },
      validate: {
        notNull: {
          msg: 'Email tidak boleh kosong'
        },
        notEmpty: {
          msg: 'Email tidak boleh kosong'
        },
        isEmail : {
          msg : 'format email invalid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password tidak boleh kosong'
        },
        notEmpty: {
          msg: 'Password tidak boleh kosong'
        }
      }
    },
  }, {
    hooks: {
      beforeCreate: (el) => {
        el.password = hashPassword(el.password)
        el.id = uuidv4();
      }
    },
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};