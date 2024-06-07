describe("Browser Navigation", () => {
  it("Navigation test", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.title(
      'div[class="content-wrap bottom-animated middle-animated animated top-animated"]'
    ).should("eq", "Book a demo | Zoho Commerce");
    cy.get(".zwc-relatedPrd-wrap > .zwc-product-social > a").click();
    cy.get(
      ".zw-product-header > .content-wrap > .product-title > a > .product-icon"
    ).should("be.visible");
    cy.go("back");
    cy.title(
      'div[class="content-wrap bottom-animated middle-animated animated top-animated"]'
    ).should("eq", "Book a demo | Zoho Commerce");
    cy.go("forward");
    cy.get(
      ".zw-product-header > .content-wrap > .product-title > a > .product-icon"
    ).should("be.visible");
    cy.reload();
  });
});
