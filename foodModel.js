const db = require('./data/dbConfig.js');

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  console.log('adding dish');
  return db('dishes')
    .insert(dish);
}

function getDish(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function getRecipes() {
  return db('recipes');
}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe);
}