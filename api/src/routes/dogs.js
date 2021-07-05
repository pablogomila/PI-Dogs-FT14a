const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hola Soy Dogs!')
})

module.exports = router;