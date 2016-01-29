describe("FlipPizza", function() {
  it("creates a Pizza object of customer selections", function() {
    var pizza = new FlipPizza("sauce","cheese","veggies","meat","seasoning","medium");
    expect(pizza.sauce).to.equal("sauce");
    expect(pizza.cheese).to.equal("cheese");
    expect(pizza.veggies).to.equal("veggies");
    expect(pizza.meat).to.equal("meat");
    expect(pizza.seasoning).to.equal("seasoning");
    expect(pizza.pizzaSize).to.equal("medium");
  });
});

describe("Sauce", function() {
  it("creates a Sauce sorted by price", function() {
    var sauce = new Sauce("Marinara","Spicy","None");
    expect(sauce.regular).to.equal("Marinara");
    expect(sauce.plus).to.equal("Spicy");
    expect(sauce.less).to.equal("None");
    });
});

describe("Cheese", function() {
  it("creates a Cheese sorted by price", function() {
    var cheese = new Cheese("Mozerella","Extra","None");
    expect(cheese.regular).to.equal("Mozerella");
    expect(cheese.plus).to.equal("Extra");
    expect(cheese.less).to.equal("None");
    });
});
