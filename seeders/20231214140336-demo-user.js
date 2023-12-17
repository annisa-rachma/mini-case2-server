'use strict';
const {hashPassword} = require('../helper/bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const dataBranches = require('../data/branches.json').map((el) => {
      el.createdAt = el.updatedAt = new Date()
      return el
    })
    const dataPositions = require('../data/positions.json').map((el) => {
      el.createdAt = el.updatedAt = new Date()
      return el
    })
    const dataEmployees = require('../data/employees.json').map((el) => {
      el.createdAt = el.updatedAt = new Date()
      return el
    })
    const dataAdmin = [
      {
        id: "887f1d58-1e60-4541-ac91-6d0779da8e57",
        email : 'admin1@mail.com',
        password : hashPassword('12345'),
        createdAt : new Date(),
        updatedAt : new Date()
      }   
    ]

    // console.log(dataPositions)
    await queryInterface.bulkInsert('Admins', dataAdmin);
    await queryInterface.bulkInsert('Branches', dataBranches);
    await queryInterface.bulkInsert('Positions', dataPositions);
    await queryInterface.bulkInsert('Employees', dataEmployees);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
    await queryInterface.bulkDelete('Positions', null, {});
    await queryInterface.bulkDelete('Branches', null, {});
    await queryInterface.bulkDelete('Admins', null, {});
  }
};
