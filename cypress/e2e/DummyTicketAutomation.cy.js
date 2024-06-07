describe('Website Automation', ()=>{
    it('Application Fill', ()=>{
        cy.visit('https://www.dummyticket.com/')
        cy.get('.ffb-id-1bt552nb > .ffb-block-button-1-0').click()
        cy.get('#product_549').check().should('be.checked')
        cy.get('#travname').type('Tharun').should('have.value', 'Tharun')
        cy.get('#travlastname').type('S').should('have.value','S')
        cy.get('#dob').click()
        //
        cy.get('.ui-datepicker-month').click()
        cy.get('#sex_1').check().should('be.checked')
       // cy.get('#sex_2').should('not.be.checked')
})
})