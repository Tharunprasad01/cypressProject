describe("Fill up the form on OMR Branch", () => {
  

  it("should fill the form with sample data", () => {

    cy.visit("https://omrbranch.com/apitestingtraininginchennaiomr");
    //Name
    cy.get("#first_name").type("Rajesh");
    cy.get("#last_name").type("Kumar");
    //Add
    cy.get(".form-control.address").type("OMR Thoraipakkam");
    //Mail
    cy.get("#email").type("RajeshKumar@gmail.com");
    //Phone
    cy.get("#phone").type("9876543210");
    //Gender-Radio
    cy.get("#male").should("be.visible");
    cy.get("#female").should("be.visible");

    cy.get("#male").check().should("be.checked");

    cy.get("#female").should("not.be.checked");

    //Hobbies checkbox
    cy.get("#checkbox-cricket").check().should("be.checked");
    cy.get("#checkbox-hockey").check().should("be.checked");

    // cy.get('input[name="course"]').type("API Testing");

    //Language
    cy.get("textarea[placeholder='Select language']").click();
    cy.get("#select2-languages-results").contains("English").click()

    // cy.get(".select2-results__options").type("English").type("{enter}");
    // cy.get("textarea[placeholder='Select language']").should("have.text", "English");

    //password
    cy.get('#password').type("ABCD@1234")

    //Confirm password
    cy.get('#confirm-password').type("ABCD@1234")

    // Submit the form
    cy.get('button[type="submit"]').click();

    // // Verify form submission (assuming the site provides a success message)
    // cy.contains("Thank you for your message").should("be.visible");
  });
});
