const express = require('express');
const Recipes = require('./recipes-model');
const {checkValidRecipeId} = require('./recipes-middleware');

const router = express.Router();

router.get('/:recipe_id', checkValidRecipeId, (req, res, next) => {
    try {
        res.status(200).json(req.existing);
    } catch(err) {
        next(err);
    }
})

router.get('/:recipe_id', checkValidRecipeId, async (req, res, next) => {
    try {
        const {recipe_id} = req.params;
        console.log(recipe_id);
        const recipes = await Recipes.getRecipeById();
        res.status(200).json(recipes);
    } catch(err) {
        next(err);
    }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message});
});

module.exports = router;