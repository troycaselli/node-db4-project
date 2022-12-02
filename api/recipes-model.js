const db = require('../data/db-config');

function findRecipeById(recipe_id) {
    return db('recipes')
        .where({recipe_id})
        .first()
}

function getRecipeById(recipe_id) {
    const recipe = db('recipes as r')
        .join('steps as s', 'r.recipe_id','=', 's.recipe_id')
        .leftJoin('ingredientQuantities as iq', 's.step_id', '=', 'iq.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', '=', 'iq.ingredient_id')
        .where('r.recipe_id', recipe_id)
        .select(
            'r.recipe_id',
            'recipe_name',
            'created_at',
            's.step_id',
            'step_number',
            'step_instructions',
            'i.ingredient_id',
            'ingredient_name',
            'iq.quantity'
        )
        .orderBy('step_number')

    return recipe;
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
// left join ingredientQuantities as iq
//     on s.step_id = iq.step_id
// left join ingredients as i
//     on i.ingredient_id = iq.ingredient_id
// where r.recipe_id = 2
// order by step_number;

module.exports = {
    findRecipeById,
    getRecipeById
}