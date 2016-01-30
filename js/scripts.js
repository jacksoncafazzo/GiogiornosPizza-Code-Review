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
  $(".sauce").click(function () {
    $(".currentSauce").append('<li>' + this.name + '</li>')
  });

  $(".cheese").click(function () {
    $(".currentCheese").append('<li>' + this.name + '</li>')
  });

  $(".veggies").click(function () {
    $(".currentVeggies").append('<li>' + this.name + '</li>')
  });

  $(".meats").click(function () {
    $(".currentMeats").append('<li>' + this.name + '</li>')
  });

  $(".seasoning").click(function () {
    $(".currentSeasoning").append('<li>' + this.name + '</li>')
  });

  $("#newPizza").submit(function (event) {
    var sauce = $("input:checked.sauce").append($("input:checked.sauce").name)
    var cheese = $("input:checked.cheese").append($("input:checked.cheese").name)
    var veggies = $("input:checked.veggies").append($("input:checked.veggies").name)
    var meats = $("input:checked.meats").append($("input:checked.meats").name)
    var seasonings = $("input:checked.seasonings").append($("input:checked.seasonings").name)

    console.log(sauce);
    $(".sauceTotal").text()
    event.preventDefault();
  });




  $("#noSauce").click(function() {
    $(".sauce-info").empty();
    $("input:checkbox.sauce").attr('checked', false);
  });

  $("#noCheese").click(function() {
    $(".cheese-info").empty();
    $("input:checkbox.cheese").attr('checked', false);
  });

  $("#noVeggies").click(function() {
    $(".veggies-info").empty();
    $("input:checkbox.veggies").attr('checked', false);
  });

  $("#noMeats").click(function() {
    $(".meats-info").empty();
    $("input:checkbox.meats").attr('checked', false);
  });

  $("#noSeasoning").click(function() {
    $(".seasoning-info").empty();
    $("input:checkbox.seasoning").attr('checked', false);
  });
});
