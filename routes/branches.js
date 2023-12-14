const express = require('express')
const router = express.Router()
const BranchesController = require('../controllers/branchesController')

router.get('/braches', BranchesController.getAllBranches)
router.post('/braches', BranchesController.postBranch)
router.get('/braches/:id', BranchesController.getBranchById)
router.put('/braches/:id', BranchesController.editBranchById)
router.delete('/braches/:id', BranchesController.deleteBranchById)

module.exports = router