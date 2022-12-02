const db = require('../data/db-config');

function findRecipeById(recipe_id) {
    return db('recipes')
        .where({recipe_id})
        .first()
}

async function getRecipeById(recipe_id) {
    const recipe = await db('recipes as r')
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

    const result = {
        recipe_id: recipe[0].recipe_id,
        recipe_name: recipe[0].recipe_name,
        created_at: recipe[0].created_at,
        steps: []
    };

    recipe.forEach(step => {
        const stepData = {
            step_id: step.step_id,
            step_number: step.step_number,
            step_instructions: step.step_instructions,
            ingredients: []
        };

        if(step.ingredient_id) {
            stepData.ingredients.push({
                ingredient_id: step.ingredient_id,
                ingredient_name: step.ingredient_name,
                quantity: step.quantity
            });
        }

        result.steps.push(stepData);
    })

    return result;
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