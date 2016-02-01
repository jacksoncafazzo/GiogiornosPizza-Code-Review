function FlipPizza (toppings, pizzaSize, totals) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
  this.totals = totals;
}

function Topping (sauce, cheese, veggie, meat, seasoning) {
  this.sauce = sauce;
  this.cheese = cheese;
  this.veggie = veggie;
  this.meat = meat;
  this.seasoning = seasoning;
}

FlipPizza.prototype.getPizzaPrice = function () {
  var sauceTotal = 0;
  debugger;
  for (var i = 0; i < Object.keys(this.toppings.sauce).length; i++) {
    var sauceTotal =+ 1;
  }
  for (var i = 0; i < Object.keys(this).length; i++) {
    sauceTotal =+ this.toppings.sauce[0].length;
  }
  var sauceTotal = this.toppings.sauce.length * 0.5;
  var cheeseTotal = this.toppings.cheese.length;
  var vegetableTotal = this.toppings.veggie.length * 0.5;
  var meatTotal = this.toppings.meat.length * 1.5;
  var seasoningTotal = this.toppings.seasoning.length * 2
  $(".sauceTotal").text(sauceTotal);
  $(".cheeseTotal").text(cheeseTotal);
  $(".veggiesTotal").text(vegetableTotal);
  $(".meatsTotal").text(meatTotal);
  $(".seasoningTotal").text(seasoningTotal);
  var toppingPrices = sauceTotal + cheeseTotal + vegetableTotal + meatTotal + seasoningTotal;
  if (this.pizzaSize === "Toad") {
    pizzaReturn = toppingPrices + 5;
  } else if (this.pizzaSize === "Princess") {
    pizzaReturn = toppingPrices + 7;
  } else if (this.pizzaSize === "Yoshi") {
    pizzaReturn = toppingPrices + 12;
  } else if (this.pizzaSize === "Mario") {
    pizzaReturn = toppingPrices + 16;
  } else if (this.pizzaSize === "Bowser") {
    pizzaReturn = toppingPrices + 22;
  } else {
    alert("You forgot to choose a size");
  }
  $(".totalAmount").empty();
  $(".totalAmount").append(pizzaReturn);

  return pizzaReturn
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

  $(".clear-pizza").click(function (event) {
    $("ul").empty();
    $("input:checkbox").attr("checked", false);
    console.log(pizza);
    pizza = {};
    console.log(pizza);
  });

  $("input:checkbox").click(function (event) {
    $("ul").empty();
    var sizes = $("input:radio");
    for (var i = 0; i < sizes.length; i++) {
      if ($(sizes[i]).prop("checked") === true) {
      var pizzaSize = $("input:radio:checked").val();
      pizzaSize = $(sizes[i]).val();
      }
    }
    var toppings = new Topping("","","","","");
    var pizza = new FlipPizza(toppings, pizzaSize);
    var toppingSections = ["sauces","cheeses","veggies","meats","seasoning"];
    var custToppingSection = $(this).prop("class");
    var custTopping = $(this).prop("name");
    var toppingSection = $(this).prop("class");
    $("input:checkbox:checked").each(function () {
      var section = $(this).prop("class");
      if (section === "sauces") {
        $(".currentSauce").append('<li>' + this.name + '</li>');
        toppings.cheese = this.name;
      }
      if (section === "cheeses") {
        $(".currentCheese").push('<li>' + this.name + '</li>');
        toppings.cheese = this.name;
      }
      if (section === "veggies") {
        $(".currentVeggies").push('<li>' + this.name + '</li>');
        toppings.veggie = this.name ;
      }
      if (section === "meats") {
        $(".currentMeats").push('<li>' + this.name + '</li>');
        toppings.meat = this.name ;
      }
      if (section === "seasoning") {
        $(".currentSeasoning").push('<li>' + this.name + '</li>');
        toppings.seasoning = this.name;
      }
    });
    var pizza = new FlipPizza(toppings, pizzaSize);
    pizzaTotal = pizza.getPizzaPrice();

    console.log(pizzaTotal);



    console.log("Pizza size is: " + pizzaSize);


    console.log(pizza);
  });


});

//


//           } if ($(this).hasClass("seasoning")) {

//             pizza.seasoning.plus.push(this.name);
//           } else {
//             console.log("panic in the disco");
//           }
//         }
//       } else if ($(this).is("regular")) {
//         if ($(this).hasClass("sauce")) {
//           $(".currentSauce").push('<li>' + this.name + '</li>');
//           pizza.sauce.regular.push(this.name);
//         } else if ($(this).hasClass("cheese")) {
//           $(".currentCheese").push('<li>' + this.name + '</li>');
//           pizza.cheese.regular.push(this.name);
//         } else if ($(this).hasClass("veggies")) {
//           $(".currentVeggies").push('<li>' + this.name + '</li>');
//           pizza.veggies.regular.push(this.name);
//         } else if ($(this).hasClass("meats")) {
//           $(".currentMeats").push('<li>' + this.name + '</li>');
//           pizza.meats.regular.push(this.name);
//         } else if ($(this).hasClass("seasoning")) {
//           $(".currentSeasoning").push('<li>' + this.name + '</li>');
//           pizza.seasoning.regular.push(this.name);
//         } else {
//           console.log("panic in the other disco");
//         }
//       } else if ($(this).checked === false) {
//       for (var i = 0; i < Object.keys(pizza); i++) {
//         for (var i = 0; i < Object.keys(pizza); i++);
//         if (this.name === pizza.getOwnPropertyNames(pizza[i])) {
//           for (var j = 0; j < Object.keys(pizza[i]); j++) {
//             var toppingType = pizza[i];
//             if (this.name === pizza.toppingType[j]) {
//               pizza.toppingType[j] = [];
//             } else {
//               console.log("whoa nelly");
//             }
//           }
//         } else {
//           console.log("fail");
//         }
//       }
//     }
//
//
//     // then you make your pizza from the checked boxes and display it
//
//   // $("input:checkbox").click(function () {
//   //   debugger;
//   //
//   //
//   //
//   // });
//
// // populate list with checkboxs
//
//
//   // $(".choosingSize").click(function () {
//   //   var pizza = {};
//   //   var sauces = [];
//   //   var cheeses = [];
//   //   var veggies = [];
//   //   var meats = [];
//   //   var seasonings = [];
//   //   var sauce = [];
//   //   var cheese = [];
//   //   var veggies = [];
//   //   var meats = [];
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
