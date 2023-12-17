const express = require('express')
const AdminController = require('../controllers/adminController')
const router = express.Router()
const BranchesController = require('../controllers/branchesController')
const EmployeeController = require('../controllers/employeesController')
const PositionController = require('../controllers/positionsController')
const {authentication} = require('../middlewares/authentication')

router.post('/login', AdminController.loginAdmin)

router.use(authentication)

router.post('/register', AdminController.registerAdmin)

router.get('/branches', BranchesController.getAllBranches)
router.post('/branches', BranchesController.postBranch)
router.get('/branches/:id', BranchesController.getBranchById)
router.put('/branches/:id', BranchesController.editBranchById)
router.delete('/branches/:id', BranchesController.deleteBranchById)

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