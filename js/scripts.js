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

function getChecks (topping) {
  $("input:checked").each(function () {
    if (this.name === topping) {
      return topping;
    } else {
      console.log("something went wrong");
    }
  });
}


// *******************
  //   sauce.push($(this).attr('name'));
  // });
  // var regular = [];
  // var plus = []
  // var toppings = {};
  // debugger;
  // var tempRegular = "" + topping + " input:checked";
  // var capitol = topping.charAt(0);
  // capitol = capitol.toUpperCase();
  // var plusString = capitol.concat(topping.slice(1));
  // var tempPlus = "plus" + plusString + " input:checked";
  // $("." + tempRegular + "").each(function () {
  //   regular.push($(this).attr("name"));
  // });
  // $("" + tempPlus + "").each(function () {
  //   plus.push($(this).attr("name"));
  // });
  // return regular, plus;
//
// function whereToPut formula (pizza, toppingType) {
//   var regularList = pizza.getOwnPropertyNames(pizza.toppingType.regular)
//   var plusList = pizza.getOwnPropertyNames(pizza.toppingType.plus)
//
// //  $(".sauce input:checkbox").each( function () {
//     for (var i = 0; i < regularList.length; i++) {
//       if (this.name === regularList[i]) {
//
//       }
//         Object.defineProperties(pizza.toppingType.regular, regularList[i])
//
//     }
//     for (var i = 0; i < plusList.length; i++) {
//       if (this.name === plusList[i]) {
//
//       }
//     }
//       if (this.name === plusList[i]) {
//         Object.defineProperties(pizza.toppingType.plus, plusList[i])
//
//       }
//   });
// }


$(document).ready(function () {
  var pizza = {};

  $(".clear-pizza").click(function () {
    $("ul").empty();
    $("input:checkbox").attr("checked", false);
    console.log(pizza);
    pizza = {};
    console.log(pizza);
  });

  $("input:checkbox").click(function (event) {
    var toppingSection = this.name;
    if ($(this).hasClass("regular")) {
      var toppingType = "regular";
    } else if ($(this).hasClass("plus")) {
      var toppingType = "plus";
    } else {
      console.log("whoa man");
    }

    if ($(this).checked === true) {
    } else if (toppingType === "plus")) {
        if ($(this).hasClass("sauce")) {
          $(".currentSauce").append('<li>' + this.name + '</li>');
          pizza.sauce.plus.push(this.name);
        } if ($(this).hasClass("cheese")) {
          $(".currentCheese").push('<li>' + this.name + '</li>');
          pizza.cheese.plus.push(this.name);
        } if ($(this).hasClass("veggies")) {
          $(".currentVeggies").push('<li>' + this.name + '</li>');
          pizza.veggies.plus.push(this.name);
        } if ($(this).hasClass("meats")) {
          $(".currentMeats").push('<li>' + this.name + '</li>');
          pizza.meats.plus.push(this.name);
        } if ($(this).hasClass("seasoning")) {
          $(".currentSeasoning").push('<li>' + this.name + '</li>');
          pizza.seasoning.plus.push(this.name);
        } else {
          console.log("panic in the disco");
        }
      } else if ($(this).is("regular")) {
        if ($(this).hasClass("sauce")) {
          $(".currentSauce").push('<li>' + this.name + '</li>');
          pizza.sauce.regular.push(this.name);
        } else if ($(this).hasClass("cheese")) {
          $(".currentCheese").push('<li>' + this.name + '</li>');
          pizza.cheese.regular.push(this.name);
        } else if ($(this).hasClass("veggies")) {
          $(".currentVeggies").push('<li>' + this.name + '</li>');
          pizza.veggies.regular.push(this.name);
        } else if ($(this).hasClass("meats")) {
          $(".currentMeats").push('<li>' + this.name + '</li>');
          pizza.meats.regular.push(this.name);
        } else if ($(this).hasClass("seasoning")) {
          $(".currentSeasoning").push('<li>' + this.name + '</li>');
          pizza.seasoning.regular.push(this.name);
        } else {
          console.log("panic in the other disco");
        }
      } else if ($(this).checked === false) {
      for (var i = 0; i < Object.keys(pizza); i++) {
        for (var i = 0; i < Object.keys(pizza); i++);
        if (this.name === pizza.getOwnPropertyNames(pizza[i])) {
          for (var j = 0; j < Object.keys(pizza[i]); j++) {
            var toppingType = pizza[i];
            if (this.name === pizza.toppingType[j]) {
              pizza.toppingType[j] = [];
            } else {
              console.log("whoa nelly");
            }
          }
        } else {
          console.log("fail");
        }
      }
    }

  });
    // then you make your pizza from the checked boxes and display it

  // $("input:checkbox").click(function () {
  //   debugger;
  //
  //
  //
  // });

// populate list with checkboxs


  // $(".choosingSize").click(function () {
  //   var pizza = {};
  //   var sauces = [];
  //   var cheeses = [];
  //   var veggies = [];
  //   var meats = [];
  //   var seasonings = [];
  //   var sauce = [];
  //   var cheese = [];
  //   var veggies = [];
  //   var meats = [];
  //   var seasoning = [];
  //   var pizzaSize = [];
  //   var plusSauce = [];
  //   var plusCheese = [];
  //   var plusVeggies = [];
  //   var plusMeats = [];
  //   var plusSeasoning = [];
  //
  //   $("input:checked.sauce").each(function () {
  //     sauce.push($(this).attr("name"));
  //   });
  //   $("#plusSauce input:checked").each(function () {
  //     plusSauce.push($(this).attr("name"));
  //   });
  //   sauce = new Sauce(sauce, plusSauce);
  //   $("input:checked.cheese").each(function () {
  //     cheese.push($(this).attr("name"));
  //   });
  //   $("#plusCheese input:checked").each(function () {
  //     plusCheese.push($(this).attr("name"));
  //   });
  //   cheese = new Cheese(cheese, plusCheese);
  //   debugger;
  //   $("input:checked.veggies").each(function () {
  //     veggies.push($(this).attr("name"));
  //   });
  //   $("#plusVeggies input:checked").each(function () {
  //     plusVeggies.push($(this).attr("name"));
  //   });
  //   veggies = new Veggies(veggies, plusVeggies);
  //   $("input:checked.meats").each(function () {
  //     meats.push($(this).attr("name"));
  //   });
  //   $("#plusMeats input:checked").each(function () {
  //     plusMeats.push($(this).attr("name"));
  //   });
  //   meats = new Meat(meats, plusMeats);
  //   $("input:checked.seasoning").each(function () {
  //     seasoning.push($(this).attr("name"));
  //   });
  //   $("#plusSeasoning input:checked").each(function () {
  //     plusSeasoning.push($(this).attr("name"));
  //   });
  //   seasonings = new Seasoning(seasoning, plusSeasoning);
  //
  //   pizzaSize.push($(".choosingSize input:checked").attr("val"));
  //   var pizza = new FlipPizza(sauces, cheeses, veggies, meats, seasonings, pizzaSize);
  //   console.log(pizza);
  //
  //   $(".sauceTotal").text(Object.keys(pizza.sauce.plus.length * 0.5));
  //
  // });

  // $("#newPizza").submit(function (event) {
  //   var checkedBoxes = {}
  //   $("input:checkbox.checked").each( function () {
  //
  //   });
  //   console.log(checkedBoxes);
  // });

    // *******************************
    // $("." + tempRegular + "").each(function () {
    //   regular.push($(this).attr("name"));
    // });
    // $("" + tempPlus + "").each(function () {
    //   plus.push($(this).attr("name"));
    // });
    //
    // var sauce = getCheckNames(".sauce");
    // var cheese = getCheckNames(".cheese");
    // var veggies = getCheckNames(".veggies");
    // var meats = getCheckNames(".meats");
    // var seasonings = getCheckNames(".seasoning");
    // var pizzaSize = []
    // pizzaSize.push($(".choosingSize input:checked").attr("name"));
    // var pizza = new FlipPizza(sauce, cheese, veggies, meats, seasonings, pizzaSize);
    // console.log(pizza);


  event.preventDefault();


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
