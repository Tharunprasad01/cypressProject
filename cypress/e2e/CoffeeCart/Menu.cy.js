describe("Menu", () => {
  it("Options", () => {
    cy.visit("https://coffee-cart.app/");
    cy.get("a.router-link-active.router-link-exact-active").should(
      "have.text",
      "menu"
    );
    cy.get(":nth-child(2) > a").should("have.text", "cart (0)").click();
    cy.get("p").should("have.text", "No coffee, go add some.");
  });
  it("SelectingOrder", () => {
    cy.visit("https://coffee-cart.app/");
    cy.get(`div[aria-label='Espresso Macchiato']`).click();
    cy.get(`div[aria-label='Cappuccino']`).click();
    cy.get(`div[aria-label='Flat White']`).click();
    cy.get(".promo > span").contains(
      "It's your lucky day! Get an extra cup of Mocha for $4."
    );
    cy.get(`div[class='promo'] button:nth-child(2)`).click();
    cy.get(".pay").should("have.text", "Total: $49.00");
    cy.get(".pay").should("not.eq", "Total: $53.00");
    cy.get(".pay").trigger("mouseover");
    cy.get(`button[aria-label='Proceed to checkout']`).click();
    cy.wait(2000)
    cy.get("#name").type("Tharun prasad S")
    cy.get("#email").type("tharun@gmail.com")
    cy.get("#promotion").check()
    cy.get("#submit-payment").click()
    cy.get(".snackbar.success").should('have.text',"Thanks for your purchase. Please check your email for payment.")
  });
});
