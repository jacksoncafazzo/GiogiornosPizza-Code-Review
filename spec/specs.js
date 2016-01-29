describe("FlipPizza", function() {
  it("creates a Pizza object of customer selections", function() {
    var pizza = new FlipPizza("sauce","cheese","veggies","meat","seasoning");
    expect(pizza.sauce).to.equal("sauce");
    expect(pizza.cheese).to.equal("cheese");
    expect(pizza.veggies).to.equal("veggies");
    expect(pizza.meat).to.equal("meat");
    expect(pizza.seasoning).to.equal("seasoning");
  });
});
