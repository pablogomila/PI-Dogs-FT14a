const { Router } = require('express');
const DogRoute = require('./dogs');
const DogTemper = require('./temper')


const router = Router();

router.use('/dogs', DogRoute);
router.use('/temper', DogTemper);


module.exports = router;
