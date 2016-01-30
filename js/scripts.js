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

FlipPizza.prototype.getPizzaPrice = function () {
  var toppingPrices = (Object.keys(this.sauce.plus).length * 0.5) + Object.keys(this.cheese.plus).length + (Object.keys(this.meat.plus).length * 1.5) + (Object.keys(this.veggies.plus).length * 0.5) + (Object.keys(this.seasoning.plus).length * 2);
  var pizzaReturn = 0;

  if (this.pizzaSize.personal === "Toad") {
    pizzaReturn = toppingPrices + 5;
  } else if (this.pizzaSize.small === "Princess") {
    pizzaReturn = toppingPrices + 7;
  } else if (this.pizzaSize.medium === "Yoshi") {
    pizzaReturn = toppingPrices + 12;
  } else if (this.pizzaSize.plus === "Mario") {
    pizzaReturn = toppingPrices + 16;
    console.log(pizzaReturn);
  } else if (this.pizzaSize.xtraplus === "Bowser") {
    pizzaReturn = toppingPrices + 22;
  } else {
    alert("You forgot to choose a size");
  }
  this.pizzaSize = {
    personal: "",
    small: "",
    medium: "",
    plus: "",
    xtraplus: ""
  };
  return pizzaReturn
}


$(document).ready(function () {
  $("#newPizza").submit(function () {

  });

  $("#noSauce").click(function() {
    $("input:checkbox.sauce").attr('checked', false);
  });

  $("#noCheese").click(function() {
    $("input:checkbox.cheese").attr('checked', false);
  });

  $("#noVeggies").click(function() {
    $("input:checkbox.veggies").attr('checked', false);
  });


  $("#noMeats").click(function() {
    $("input:checkbox.meats").attr('checked', false);
  });

  $("#noSeasoning").click(function() {
    $("input:checkbox.seasoning").attr('checked', false);
  });
});
