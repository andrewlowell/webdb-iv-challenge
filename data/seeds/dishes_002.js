
exports.seed = function(knex, Promise) {
  return knex('dishes').insert([
    {name: "Bacon-wrapped Shrimp"},
    {name: "Pepperoni Pizza"},
    {name: "Impossible Burger"}
  ]);
};
