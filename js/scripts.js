function FlipPizza (sauce, cheese, meat, veggies, seasoning, pizzaSize) {
  this.sauce = sauce;
  this.cheese = cheese;
  this.veggies = veggies;
  this.meat = meat;
  this.seasoning = seasoning;
  this.pizzaSize = pizzaSize;
}

function Sauce (regular, plus, less) {
  this.regular = regular;
  this.plus = plus;
  this.less = less;
}

function Cheese (regular, plus, less) {
  this.regular = regular;
  this.plus = plus;
  this.less = less;
}

function Meat (regular, plus, less) {
  this.regular = regular;
  this.plus = plus;
  this.less = less;
}

function Veggies (regular, plus, less) {
  this.regular = regular;
  this.plus = plus;
  this.less = less;
}

function Seasoning (regular, plus, less) {
  this.regular = regular;
  this.plus = plus;
  this.less = less;
}

function Size (personal, small, regular, plus, xtraplus) {
  this.personal = personal;
  this.small = small;
  this.regular = regular;
  this.plus = plus;
  this.xtraplus = xtraplus;
}

function getPizzaPrice (pizza) {
  return Object.keys(pizza.sauce.plus).length + Object.keys(pizza.cheese.plus).length + Object.keys(pizza.meat.plus).length + (Object.keys(pizza.veggies.plus).length * 0.5) + (Object.keys(pizza.seasoning.plus).length * 2);
}

$(document).ready(function () {
  $("#newPizza").submit(function () {
    
  })
})
