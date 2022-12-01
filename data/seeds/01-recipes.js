exports.seed = async function(knex) {
  // await knex('table_name').truncate()
  await knex('recipes').insert([
    {recipe_name: 'Breakfast Cereal'},
    {recipe_name: 'Corn Dog'}
  ]);
};
