const { Router } = require('express');
const {getAllDogs, addDog} = require('../Controllers/dogs')

const router = Router();

router.get('/', getAllDogs)
router.post('/', addDog)

module.exports = router;