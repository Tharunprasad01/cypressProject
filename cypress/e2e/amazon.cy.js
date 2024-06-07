describe('Amazon iPhone 15 Search and Add to Cart', () => {

    it('should search for iPhone 15 and add the very first product to the cart', () => {
     
      cy.visit('https://www.amazon.in');
  
      cy.get('#twotabsearchtextbox').type('iPhone 15');
      cy.get('#nav-search-submit-button').click();
  
      cy.wait(2000);
  
      cy.get("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] span[class='a-size-base-plus a-color-base a-text-normal']").click();

      cy.get('#add-to-cart-button').click();
  
      cy.get('#nav-cart-count').should('not.have.text', '0');
    });
  });
  