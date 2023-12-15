'use strict';

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

    // console.log(dataPositions)
    await queryInterface.bulkInsert('Branches', dataBranches);
    await queryInterface.bulkInsert('Positions', dataPositions);
    await queryInterface.bulkInsert('Employees', dataEmployees);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
    await queryInterface.bulkDelete('Positions', null, {});
    await queryInterface.bulkDelete('Branches', null, {});
  }
};
