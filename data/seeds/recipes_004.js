
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {name: "Grandma's best bacon-wrapped lil' shrampies", dish_id: 1, instructions: "Just wrap the bacon around the shrimp and nuke 'em in the oven, dummy"},
    {name: "thin-crust, new-york-style, baby", dish_id: 2, instructions: "Mix ingredients, knead dough, let rest, stretch dough out, put toppings on, nuke in a super hot oven, ENJOY"},
    {name: "the original impossible burgeroonie", dish_id: 3, instructions: "Dude, honestly just buy one from some store or something"}
  ]);
};
