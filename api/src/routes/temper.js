const { Router } = require('express')
const { getAllTemper } = require('../Controllers/tempers')

const router = Router()

router.get('/', getAllTemper)

module.exports = router
