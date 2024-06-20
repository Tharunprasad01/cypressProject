describe("Shopping", () => {
    it("Login", () => {
      cy.visit("https://www.saucedemo.com/");
  
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce");
      cy.get("#login-button").click();
  
      //Adding backpack to cart
      cy.get("#add-to-cart-sauce-labs-backpack").click();
  
      //Adding jacket to cart
      cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
  
      //Adding tshirt using xpath
      cy.xpath("(//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)'])[1]").click();
  
      //Going to Cart
      cy.xpath("//a[@class='shopping_cart_link']").click();

      //Verifying item 
      cy.get("a[id='item_4_title_link'] div[class='inventory_item_name']").should('have.text',"Sauce Labs Backpack")
      cy.get("a[id='item_5_title_link'] div[class='inventory_item_name']").should('have.text',"Sauce Labs Fleece Jacket")
      cy.get("a[id='item_3_title_link'] div[class='inventory_item_name']").should('have.text',"Test.allTheThings() T-Shirt (Red)")

      //proceed to checkout
      cy.get('[data-test="checkout"]').click()

      cy.get(`.header_secondary_container`).should('have.text',"Checkout: Your Information")

      cy.get("#first-name").type("Rahul")
      cy.get("#last-name").type("Dravid")
      cy.get("#postal-code").type("600028")

      cy.get("#continue").click()

      //Checkout overview
      cy.get(".title").should('have.text',"Checkout: Overview")

      //verifying item
      cy.get("a[id='item_4_title_link'] div[class='inventory_item_name']").should('have.text',"Sauce Labs Backpack")
      cy.get("a[id='item_5_title_link'] div[class='inventory_item_name']").should('have.text',"Sauce Labs Fleece Jacket")
      cy.get("a[id='item_3_title_link'] div[class='inventory_item_name']").should('have.text',"Test.allTheThings() T-Shirt (Red)")

      cy.get(".summary_total_label").should('have.text',"Total: $103.65")

      cy.get("#finish").click()

      cy.get(".complete-header").should('have.text',"Thank you for your order!")
    });
  });
  