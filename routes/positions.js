const express = require('express')
const router = express.Router()
const PositionController = require('../controllers/positionsController')

router.get('/positions', PositionController.getAllPosition)
router.post('/positions', PositionController.postPosition)
router.get('/positions/:id', PositionController.getPositionById)
router.put('/positions/:id', PositionController.editPositionById)
router.delete('/positions/:id', PositionController.deletePositionById)

module.exports = router