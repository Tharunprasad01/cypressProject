describe('Dropdown',()=>{
    it('Select Dropdown', ()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Maldives').should('have.value', 'Maldives')
    })

    it('Auto suggest dropdown', ()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Chennai')
        cy.get('.suggestions-dropdown').contains('Chennai International Airport').click()

    })

    it('Dynamic Dropdown', ()=>{
        cy.visit('https://www.google.co.in/')
        cy.get('.gLFyf').type('Karpagam')
        cy.wait(4000)
        cy.get('div.lnnVSe')
    })
})