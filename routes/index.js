const express = require('express')
const router = express.Router()
const branches = require('./branches')
const positions = require('./positions')
const employees = require('./employees')

router.use('/client', branches)
router.use('/admin', positions)
router.use('/admin', employees)

module.exports = router