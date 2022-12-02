exports.seed = async function(knex) {
  await knex('ingredients').insert([
    {ingredient_name: 'cereal'},
    {ingredient_name: 'milk'},
    {ingredient_name: 'honey'},
    {ingredient_name: 'corn dog'}
  ]);
};
