const db = require('../data/db-config');

function findRecipeById(recipe_id) {
    return db('recipes')
        .where({recipe_id})
        .first()
}

function getRecipeById(recipe_id) {
    return 'hello'
}

// select
//     r.recipe_id,
//     recipe_name,
//     created_at,
//     s.step_id,
//     step_number,
//     step_instructions,
//     i.ingredient_id,
//     ingredient_name,
//     iq.quantity
// from recipes as r
// join steps as s
//     on r.recipe_id = s.recipe_id
// join ingredientQuantities as iq
//     on s.step_id = iq.step_id
// join ingredients as i
//     on i.ingredient_id = iq.ingredient_id
// where r.recipe_id = 2
// order by step_number;

module.exports = {
    findRecipeById,
    getRecipeById
}