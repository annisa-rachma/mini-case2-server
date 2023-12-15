const express = require('express')
const router = express.Router()
const BranchesController = require('../controllers/branchesController')
const EmployeeController = require('../controllers/employeesController')
const PositionController = require('../controllers/positionsController')

router.get('/braches', BranchesController.getAllBranches)
router.post('/braches', BranchesController.postBranch)
router.get('/braches/:id', BranchesController.getBranchById)
router.put('/braches/:id', BranchesController.editBranchById)
router.delete('/braches/:id', BranchesController.deleteBranchById)

router.get('/positions', PositionController.getAllPosition)
router.post('/positions', PositionController.postPosition)
router.get('/positions/:id', PositionController.getPositionById)
router.put('/positions/:id', PositionController.editPositionById)
router.delete('/positions/:id', PositionController.deletePositionById)

router.get('/employees', EmployeeController.getAllEmployees)
router.post('/employees', EmployeeController.postEmployee)
router.get('/employees/:id', EmployeeController.getEmployeeById)
router.put('/employees/:id', EmployeeController.editEmployeeById)
router.delete('/employees/:id', EmployeeController.deleteEmployeeById)

module.exports = router