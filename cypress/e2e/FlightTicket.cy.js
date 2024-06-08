describe("FlightTicketBooking", () => {
    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  
    it("Bookingticket", () => {
      cy.visit("https://blazedemo.com/");
      cy.get("div.container h1").should("contain.text", "Welcome to the Simple Travel Agency!");
      cy.get('select[name="fromPort"]').select("Boston").should("have.value", "Boston");
      cy.get('select[name="toPort"]').select("London").should("have.value", "London");
      cy.get('input[type="submit"]').click();
  
      // Find the indices of flight number and airline columns
      cy.get("table thead tr th").then(($headers) => {
        const headers = $headers.toArray().map((header) => header.innerText.trim());
        const flightNumberIndex = headers.indexOf("Flight #");
        const airlineIndex = headers.indexOf("Airline");
  
        // Iterate through each table row to find the selected flight
        cy.get("table tbody tr").each(($row) => {
          cy.wrap($row).find("td").eq(flightNumberIndex).then(($flightNumberCell) => {
            const flightNumber = $flightNumberCell.text().trim();
            cy.wrap($row).find("td").eq(airlineIndex).then(($airlineCell) => {
              const airline = $airlineCell.text().trim();
  
              if (flightNumber === "234" && airline === "United Airlines") {
                // Alias the selected flight row
                cy.wrap($row).as("selectedFlightRow");
              }
            });
          });
        });
      });
  
      // Interact with the selected flight row
      cy.get("@selectedFlightRow").within(() => {
        cy.contains("Choose This Flight").click();
        cy.get(`div[class='container'] h2`).should("contain.text", "Your flight from TLV to SFO has been reserved.").should('be.visible');
       
        cy.get("#inputName", { timeout: 10000 }).should("exist").type("Rahul");
        cy.get("#address").type("123 Main St");
        cy.get("#city").type("Chennai");
        cy.get("#state").type("Tamilnadu");
        cy.get("#zipCode").type("600042");
        cy.get("#cardType").select("Visa");
        cy.get("#creditCardNumber").type("123456789987");
        cy.get("#creditCardMonth").type("11");
        cy.get("#creditCardYear").type("2037");
        cy.get('#nameOnCard').type("John Smith")
        cy.get('#rememberMe').check()
        cy.get(`input[value='Purchase Flight']`).click()
        cy.get(`div.container hero-unit h1`).should('have.text',"Thank you for your purchase today!")
      });
    });
  });
  
