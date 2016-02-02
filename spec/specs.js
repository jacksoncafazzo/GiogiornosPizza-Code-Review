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
    var pizzaBase = "Bowser"
    var toppings = ["Sauce","Cheese","Veggies","Meat","Seasonings"];
    var toppingPrices = [1,1,1,1,1];
    var pizza = new FlipPizza(pizzaBase, toppings, toppingPrices);
    expect(pizza.getPizzaPrice()).to.equal(25);
  });
});
