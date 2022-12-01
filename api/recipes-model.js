const db = require('../data/db-config');

function findRecipeById(recipe_id) {
    return db('recipes')
        .where({recipe_id})
        .first()
}

function getRecipeById(recipe_id) {
    return 'hello'
}

module.exports = {
    findRecipeById,
    getRecipeById
}