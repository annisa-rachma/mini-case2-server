const express = require('express')
const router = express.Router()
const EmployeeController = require('../controllers/employeesController')

router.get('/employees', EmployeeController.getAllEmployees)
router.post('/employees', EmployeeController.postEmployee)
router.get('/employees/:id', EmployeeController.getEmployeeById)
router.put('/employees/:id', EmployeeController.editEmployeeById)
router.delete('/employees/:id', EmployeeController.deleteEmployeeById)

module.exports = router