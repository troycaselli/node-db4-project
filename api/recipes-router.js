const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // throw new Error()
    res.json({message: 'here'})
})

module.exports = router;