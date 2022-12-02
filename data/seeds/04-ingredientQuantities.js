exports.seed = async function(knex) {
  await knex('ingredientQuantities').insert([
    {quantity: '1 cup', ingredient_id: 1, step_id: 1},
    {quantity: '1 cup', ingredient_id: 2, step_id: 3},
    {quantity: 'a drizzle', ingredient_id: 3, step_id: 2},
    {quantity: '2', ingredient_id: 4, step_id: 5},
    {quantity: '3 oz', ingredient_id: 5, step_id: 5}
  ]);
};