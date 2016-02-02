describe("FlipPizza", function() {
  it("creates a Pizza object of customer selections", function() {
    var pizzaBase = ["Toad", "Princess", "Yoshi", "Mario", "Bowser"];
    var toppings = ["Sauce","Cheese","Veggies","Meat","Seasonings"];
    var toppingPrices = [1,1,1,1,1];
    var pizza = new FlipPizza(pizzaBase, toppings, toppingPrices);
    expect(pizza.pizzaBase[2]).to.eql("Yoshi");
    expect(pizza.toppings[3]).to.eql("Meat");
    expect(pizza.toppingPrices.length).to.equal(5);
  });

  it("returns additional cost of pizza items", function () {
    var pizzaBase = ["", "", "", "", "Bowser"];
    var toppings = ["Sauce","Cheese","Veggies","Meat","Seasonings"];
    var toppingPrices = [1,1,1,1,1];
    var pizza = new FlipPizza(pizzaBase, toppings, toppingPrices);
    expect(pizza.getPizzaPrice()).to.equal(25);
  });
});

//   it("will add special items and come up with a total for each section by size", function() {
//     var seasoning = new Seasoning("", ["Magic","Sparkles","Red Pepper"], "");
//     var sauce = new Sauce("", ["Spicy"], "");
//     var cheese = new Cheese("", ["Chevre"], "");
//     var veggies = new Veggies("", ["Gnome Onions"], "");
//     var meat = new Meat("", ["Anchovies"], "");
//     var size = new SizeTotal("Mario", "");
//     var pizza = new FlipPizza(sauce, cheese, veggies, meat, seasoning, size);
//     expect(pizza.getPizzaPrice()).to.equal(25.5);
//   })
// });

// describe("getChecks", function () {
//   it("gets a name from the pizza and sees if the checkbox is checked", function () {
//     var seasoning = "Special Stars";
//     expect(getChecks(seasoning)).to.equal(false);
//   });
// });
