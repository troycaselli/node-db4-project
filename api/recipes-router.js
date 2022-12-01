const express = require('express');
const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        const recipes = Recipes.find();
        res.status(200).json(recipes);
    } catch(err) {
        next(err);
    }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message});
});

module.exports = router;