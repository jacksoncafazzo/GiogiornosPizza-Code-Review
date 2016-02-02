function FlipPizza (pizzaBase, toppings, toppingPrices) {
  this.pizzaBase = pizzaBase;
  this.toppings = toppings;
  this.toppingPrices = toppingPrices;
}

FlipPizza.prototype.getPizzaPrice = function () {
  var pizzaPrice = 0;
  // var sauceTotal = 0;
  // var cheeseTotal = 0;
  // var veggiesTotal = 0;
  // var meatsTotal = 0;
  // var seasoningTotal = 0;


  for (var i = 0; i < this.toppingPrices.length; i++) {
    pizzaPrice = pizzaPrice + this.toppingPrices[i];
  }
  if (this.pizzaBase === "Toad") {
    pizzaPrice = pizzaPrice + 4;
  } else if (this.pizzaBase === "Princess") {
    pizzaPrice = pizzaPrice + 8;
  } else if (this.pizzaBase === "Yoshi") {
    pizzaPrice = pizzaPrice + 12;
  } else if (this.pizzaBase === "Mario") {
    pizzaPrice = pizzaPrice + 16;
  } else if (this.pizzaBase === "Bowser") {
    pizzaPrice = pizzaPrice + 20;
  } else {
    alert("Best start with a size");
  }



  $(".total").text(pizzaPrice);

  return pizzaPrice;
}

$(document).ready(function () {
  $("#noSauce").click(function() {
    $("input:checkbox.sauces").attr('checked', false);
  });

  $("#noCheese").click(function() {
    $("input:checkbox.cheeses").attr('checked', false);
  });

  $("#noVeggies").click(function() {
    $("input:checkbox.veggies").attr('checked', false);
  });

  $("#noMeats").click(function() {
    $("input:checkbox.meats").attr('checked', false);
  });

  $("#noSeasoning").click(function() {
    $("input:checkbox.seasonings").attr('checked', false);
  });

  $(".clear-pizza").click(function (event) {
    $("ul").empty();
    $(".total").empty();
    $("input:checkbox").attr("checked", false);
  });

  $(".update-order").click(function (event) {
    $("ul").empty();
    var sizeRadio = $("input:radio");
    for (var i = 0; i < sizeRadio.length; i++) {
      if ($(sizeRadio[i]).prop("checked") === true) {
        var pizzaBase = $("input:radio:checked").val();
        break;
      }
    }
    var custToppingSection = $(this).prop("class");
    var custTopping = $(this).prop("name");
    var toppingSection = $(this).prop("class");
    var toppings = [];
    var toppingPrices = [];

    $("input:checkbox:checked").each(function () {
      if ($(this).prop("id") === "plus") {
        toppingPrices.push(2);
      }
      $(".currentPizza").append('<li>' + this.name + '</li>');
        toppings.push(this.name);
    });

    var pizza = new FlipPizza(pizzaBase, toppings, toppingPrices)
    pizzaTotal = pizza.getPizzaPrice();
    return pizzaTotal;
  });
  event.preventDefault();

});



// if (section === "cheeses") {
//   $(".currentCheese").push('<li>' + this.name + '</li>');
//   toppings.push(this.name);
//   toppingPrices.push(1)
// }
// if (section === "veggies") {
//   $(".currentVeggies").push('<li>' + this.name + '</li>');
//   toppings.push(this.name);
//   toppingPrices.push(1)
// }
// if (section === "meats") {
//   $(".currentMeats").push('<li>' + this.name + '</li>');
//   toppings.push(this.name);
//   toppingPrices.push(1)
// }
// if (section === "seasoning") {
//   $(".currentSeasoning").push('<li>' + this.name + '</li>');
//   toppings.push(this.name);
//   toppingPrices.push(1)
// }



// var pizzaPrice = sauceTotal;
// for (i; i < 12; i++) {
//   var cheeseTotal = cheeseTotal + this.toppingPrices[i];
// }
// pizzaPrice = pizzaPrice + cheeseTotal;
// for (i; i < 27; i++) {
//   var veggiesTotal = pizzaPrice + this.toppingPrices[i];
// }
// pizzaPrice = pizzaPrice + veggiesTotal;
// for (i; i < 38; i++) {
//   meatsTotal = pizzaPrice + this.toppingPrices[i];
// }
// pizzaPrice = pizzaPrice + veggiesTotal;
// for (i; i < 47; i++) {
//   seasoningTotal = pizzaPrice + this.toppingPrices[i];
// }
// pizzaPrice = pizzaPrice + seasoningTotal;

// $(".sauceTotal").text(sauceTotal);
// $(".cheeseTotal").text(cheeseTotal);
// $(".veggiesTotal").text(veggiesTotal);
// $(".meatsTotal").text(meatsTotal);
// $(".seasoningTotal").text(seasoningTotal);

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
