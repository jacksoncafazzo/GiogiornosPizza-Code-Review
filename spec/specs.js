describe("FlipPizza", function() {
  it("creates a Pizza object of customer selections", function() {
    var sauce = new Sauce("", ["Spicy"], "");
    var cheese = new Cheese("", ["Chevre"], "");
    var veggies = new Veggies("", ["Gnome Onions"], "");
    var meat = new Meat("", ["Anchovies"], "");
    var seasoning = new Seasoning("", ["Magic"], "");
    var size = new SizeTotal("Princess", "");
    var pizza = new FlipPizza(sauce, cheese, meat, veggies, seasoning, size);
    expect(pizza.sauce.plus).to.eql(["Spicy"]);
    expect(pizza.cheese.plus).to.eql(["Chevre"]);
    expect(pizza.veggies.plus).to.eql(["Gnome Onions"]);
    expect(pizza.meat.plus).to.eql(["Anchovies"]);
    expect(pizza.seasoning.plus).to.eql(["Magic"]);
    expect(pizza.sizeTotal.pizzaSize).to.eql("Princess");
  });
});

describe("Sauce", function() {
  it("creates a Sauce sorted by price", function() {
    var sauce = new Sauce("Marinara",["Spicy", "Not Spicy"],"None");
    expect(sauce.regular).to.equal("Marinara");
    expect(sauce.plus).to.eql(["Spicy", "Not Spicy"]);
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

describe("FlipPizza.getPizzaPrice", function () {
  // it("return additional cost of pizza items", function () {
  //   var sauce = new Sauce("", ["Spicy"], "");
  //   var cheese = new Cheese("", ["Chevre"], "");
  //   var veggies = new Veggies("", ["Gnome Onions"], "");
  //   var meat = new Meat("", ["Anchovies"], "");
  //   var seasoning = new Seasoning("", ["Magic"], "");
  //   var size = new Size("", ["Princess"], "");
  //   var pizza = new FlipPizza(sauce, cheese, veggies, meat, seasoning, size);
  //   expect(getPizzaPrice(pizza)).to.equal(10.5);
  // });

  it("will add special items and come up with a total for each section by size", function() {
    var seasoning = new Seasoning("", ["Magic","Sparkles","Red Pepper"], "");
    var sauce = new Sauce("", ["Spicy"], "");
    var cheese = new Cheese("", ["Chevre"], "");
    var veggies = new Veggies("", ["Gnome Onions"], "");
    var meat = new Meat("", ["Anchovies"], "");
    var size = new SizeTotal("Mario", "");
    var pizza = new FlipPizza(sauce, cheese, veggies, meat, seasoning, size);
    expect(pizza.getPizzaPrice()).to.equal(25.5);
  })
});

describe("getChecks", function () {
  it("gets a name from the pizza and sees if the checkbox is checked", function () {
    var seasoning = "Koala Extract";
    expect(getChecks(seasoning)).to.equal(false);
  });
});
