
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {name: "bacon"},
    {name: "shrimp"},
    {name: "impossible burger"},
    {name: "flour"},
    {name: "olive oil"},
    {name: "salt"},
    {name: "pepperoni"},
    {name: "yeast"},
    {name: "hamburger bun"}
  ]);
};
