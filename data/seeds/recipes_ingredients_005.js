
exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').insert([
    {quantity: 6.2, measure: "pound", recipe_id: 1, ingredient_id: 1},
    {quantity: 34.0, measure: "individual", recipe_id: 1, ingredient_id: 2},
    {quantity: 4.0, measure: "individual", recipe_id: 3, ingredient_id: 3},
    {quantity: 3.6, measure: "cup", recipe_id: 2, ingredient_id: 4},
    {quantity: 6.77, measure: "cup", recipe_id: 2, ingredient_id: 5},
    {quantity: 2.346, measure: "teaspoon", recipe_id: 2, ingredient_id: 6},
    {quantity: 234.0, measure: "individual", recipe_id: 2, ingredient_id: 7},
    {quantity: 6.67, measure: "teaspoon", recipe_id: 2, ingredient_id: 8},
    {quantity: 2.0, measure: "individual", recipe_id: 3, ingredient_id: 9},
    {quantity: 65.345, measure: "teaspoon", recipe_id: 3, ingredient_id: 6}
  ]);
};
