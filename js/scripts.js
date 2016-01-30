function FlipPizza (sauce, cheese, meat, veggies, seasoning, sizeTotal) {
  this.sauce = sauce;
  this.cheese = cheese;
  this.veggies = veggies;
  this.meat = meat;
  this.seasoning = seasoning;
  this.sizeTotal = sizeTotal;
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

function SizeTotal (pizzaSize, orderedPizzas) {
  this.pizzaSize = pizzaSize;
  this.orderedPizzas = orderedPizzas;
}

FlipPizza.prototype.getPizzaPrice = function () {
  var sauces = Object.keys(this.sauce.plus).length * 0.5;
  var cheeses = Object.keys(this.cheese.plus).length;
  var vegetables = Object.keys(this.veggies.plus).length * 0.5;
  var meats = Object.keys(this.meat.plus).length * 1.5;
  var seasonings = Object.keys(this.seasoning.plus).length * 2
  $(".sauceTotal").text(sauces);
  $(".cheeseTotal").text(cheeses);
  $("veggiesTotal").text(vegetables);
  $("meatsTotal").text(meats);
  $("seasoningTotal").text(seasonings);
  var toppingPrices = sauces + cheeses + vegetables + meats + seasonings;
  var pizzaReturn = 0;
  var pizza = this
  if (this.sizeTotal.pizzaSize.valueOf() === "Toad") {
    pizzaReturn = toppingPrices + 5;
  } else if (this.sizeTotal.pizzaSize.valueOf() === "Princess") {
    pizzaReturn = toppingPrices + 7;
  } else if (this.sizeTotal.pizzaSize.valueOf() === "Yoshi") {
    pizzaReturn = toppingPrices + 12;
  } else if (this.sizeTotal.pizzaSize.valueOf() === "Mario") {
    pizzaReturn = toppingPrices + 16;
  } else if (this.sizeTotal.pizzaSize.valueOf() === "Bowser") {
    pizzaReturn = toppingPrices + 22;
  } else {
    alert("You forgot to choose a size");
  }
  // this.pizzaSize = {
  //   personal: "",
  //   small: "",
  //   medium: "",
  //   plus: "",
  //   xtraplus: ""
  // };
  $(".totalAmount").text(pizzaReturn);

  return pizzaReturn
}

function getCheckNames (topping) {
  var toppings = [];
  $("input:checked" + topping).each(function () {
    toppings.push(this).attr("name");
  });
  return toppings
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

  $(".choosingSize").click(function () {
    var sauce = getCheckNames(".sauce");
    var cheese = getCheckNames($("input:checked.cheese").append($("input:checked.cheese").name));
    var veggies = getCheckNames($("input:checked.veggies").append($("input:checked.veggies").name));
    var meats = getCheckNames($("input:checked.meats").append($("input:checked.meats").name));
    var seasonings = getCheckNames($("input:checked.seasoning").append($("input:checked.seasoning").name));
    var pizzaSize = []

    pizzaSize.push($(".choosingSize input:checked").attr("name"));
    console.log(pizzaSize);
    var pizza = new FlipPizza(sauce, cheese, veggies, meats, seasonings, pizzaSize);
    console.log(pizza);
  });

  $(".sauce input:checked").each(function () {
    sauce.push($(this).attr('name'));
  });

  $(".cheese input:checked").each(function () {
    cheese.push($(this).attr('name'));
  });

  $(".veggies input:checked").each(function () {
    veggies.push($(this).attr('name'));
  });

  $(".meats input:checked").each(function () {
    meats.push($(this).attr('name'));
  });

  $(".seasonings input:checked").each(function () {
    seasonings.push($(this).attr('val'));
  });

  $("#newPizza").submit(function (event) {
    var sauce = getCheckNames($("input:checked.sauce").append($("input:checked.sauce").name));
    var cheese = getCheckNames($("input:checked.cheese").append($("input:checked.cheese").name));
    var veggies = getCheckNames($("input:checked.veggies").append($("input:checked.sauce").name));
    var meats = getCheckNames($("input:checked.meat").append($("input:checked.sauce").name));
    var seasonings = getCheckNames($("input:checked.seasonings").append($("input:checked.sauce").name));

    $(".sauceTotal").text();
    event.preventDefault();
  });




  $("#noSauce").click(function() {
    // if ($("input:checkbox.sauce").empty())
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
