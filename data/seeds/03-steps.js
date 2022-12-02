exports.seed = async function(knex) {
  await knex('steps').insert([    
    {step_number: 1, step_instructions: 'Pour cereal in bowl', recipe_id: 1},
    {step_number: 3, step_instructions: 'Add honey to taste', recipe_id: 1},
    {step_number: 2, step_instructions: 'Pour milk in bowl', recipe_id: 1},
    {step_number: 1, step_instructions: 'Preheat oven to 425°', recipe_id: 2},
    {step_number: 2, step_instructions: 'Cook corn dogs until golden brown; dip in ketchup', recipe_id: 2}
  ]);
};
