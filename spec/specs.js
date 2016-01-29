describe("FlipPizza", function() {
  it("creates a Pizza object of customer selections", function() {
    var sauce = new Sauce("", "Spicy", "");
    var cheese = new Cheese("", "Chevre", "");
    var veggies = new Veggies("", "Gnome Onions", "");
    var meat = new Meat("", "Anchovies", "");
    var seasoning = new Seasoning("", "Magic", "");
    var size = new Size("", "Princess", "");
    var pizza = new FlipPizza(sauce,cheese,meat,veggies,seasoning,size);
    expect(pizza.sauce).to.equal("Spicy");
    expect(pizza.cheese).to.equal("Chevre");
    expect(pizza.veggies).to.equal("Gnome Onions");
    expect(pizza.meat).to.equal("Anchovies");
    expect(pizza.seasoning).to.equal("Magic");
    expect(pizza.pizzaSize).to.equal("Princess");
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

describe("Veggies", function() {
  it("creates a veggies sorted by price", function() {
    var veggies = new Veggies("Black Olives","","None");
    expect(veggies.regular).to.equal("Black Olives");
    expect(veggies.plus).to.equal("");
    expect(veggies.less).to.equal("None");
    });
});

describe("Meat", function() {
  it("creates a Cheese sorted by price", function() {
    var cheese = new Cheese("Mozerella","Anchovies","None");
    expect(cheese.regular).to.equal("Mozerella");
    expect(cheese.plus).to.equal("Anchovies");
    expect(cheese.less).to.equal("None");
    });
});

describe("Seasoning", function() {
  it("creates a Seasoning sorted by price", function() {
    var seasoning = new Seasoning("Oregano","Himalayian Cloud Sea Salt","None");
    expect(seasoning.regular).to.equal("Oregano");
    expect(seasoning.plus).to.equal("Himalayian Cloud Sea Salt");
    expect(seasoning.less).to.equal("None");
    });
});

describe("getPizzaPrice", function () {
  it("returns additional cost of sauce items", function () {
    var sauce = new Sauce("", ["Spicy"], "");
    var cheese = new Cheese("", ["Chevre"], "");
    var veggies = new Veggies("", ["Gnome Onions"], "");
    var meat = new Meat("", ["Anchovies"], "");
    var seasoning = new Seasoning("", ["Magic"], "");
    var size = new Size("", ["Princess"], "");

    var pizza = new FlipPizza(sauce, cheese, veggies, meat, seasoning, size);
    expect(getPizzaPrice(pizza)).to.equal(5);
  });
});
