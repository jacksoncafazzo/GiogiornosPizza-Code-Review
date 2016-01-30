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

function getPizzaPrice (pizza, size) {
  var toppingPrices = (Object.keys(pizza.sauce.plus).length * 0.5) + Object.keys(pizza.cheese.plus).length + (Object.keys(pizza.meat.plus).length * 1.5) + (Object.keys(pizza.veggies.plus).length * 0.5) + (Object.keys(pizza.seasoning.plus).length * 2);
  var pizzaReturn = 0;
  debugger;

  if (pizza.pizzaSize.hasOwnProperty("personal") === "Toad") {
    pizzaReturn = toppingPrices + 5;
  } else if (pizza.pizzaSize.hasOwnProperty("small") === "Princess") {
    pizzaReturn = toppingPrices + 7;
  } else if (pizza.pizzaSize.hasOwnProperty("medium") === "Yoshi") {
    pizzaReturn = toppingPrices + 12;
  } else if (pizza.pizzaSize.hasOwnProperty("plus") === "Mario") {
    pizzaReturn = toppingPrices + 16;
    console.log(pizzaReturn);
  } else if (pizza.pizzaSize.hasOwnProperty("xtraplus") === "Bowser") {
    pizzaReturn = toppingPrices + 22;
  } else {
    alert("You forgot to choose a size");
  }
  pizza = {
    personal: "",
    small: "",
    medium: "",
    plus: "",
    xtraplus: ""
  };
  return pizzaReturn
}
//



$(document).ready(function () {
  $("#newPizza").submit(function () {

  });

  $("#noMeats").click(function() {
    $("input:checkbox.meats").attr('checked', false);
  });

  $("#noSeasoning").click(function() {
    $("input:checkbox.seasoning").attr('checked', false);
  });
});
