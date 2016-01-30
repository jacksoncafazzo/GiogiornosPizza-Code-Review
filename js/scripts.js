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
  var toppingPrices = (Object.keys(this.sauce.plus).length * 0.5) + Object.keys(this.cheese.plus).length + (Object.keys(this.meat.plus).length * 1.5) + (Object.keys(this.veggies.plus).length * 0.5) + (Object.keys(this.seasoning.plus).length * 2);
  var pizzaReturn = 0;

  if (this.sizeTotal.pizzaSize === "Toad") {
    pizzaReturn = toppingPrices + 5;
  } else if (this.sizeTotal.pizzaSize === "Princess") {
    pizzaReturn = toppingPrices + 7;
  } else if (this.sizeTotal.pizzaSize === "Yoshi") {
    pizzaReturn = toppingPrices + 12;
  } else if (this.sizeTotal.pizzaSize === "Mario") {
    pizzaReturn = toppingPrices + 16;
    console.log(pizzaReturn);
  } else if (this.sizeTotal.pizzaSize === "Bowser") {
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

function getChecks (topping) {
  var toppings = []
  for (var i = 0; i < topping.length; i++) {
    toppings.push(topping.attr("name"));
  }
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
    var sauce = []
    var cheese = []
    var veggies = []
    var meats = []
    var seasonings = []
    var pizzaSize = []

    pizzaSize.push($(".choosingSize input:checked").attr("name"));

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

    console.log();
    var pizza = new FlipPizza(sauce, cheese, veggies, meats, seasonings, pizzaSize);
    console.log(pizza);
    $("totalAmount").text(pizza.getPizzaPrice());
  });

  $("#newPizza").submit(function (event) {



    var sauce = getChecks($("input:checked.sauce").append($("input:checked.sauce").name));
    // for (var i = 0; i < sauceBox.length; i++) {
    //   sauce.push(sauceBox.attr("name"));
    // }
console.log(sauce);
    var cheeseBox = $("input:checked.cheese").append($("input:checked.cheese").name)
    var veggiesBox = $("input:checked.veggies").append($("input:checked.veggies").name)
    var meatsBox = $("input:checked.meats").append($("input:checked.meats").name)
    var seasoningsBox = $("input:checked.seasonings").append($("input:checked.seasonings").name)




    console.log(sauce);
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
