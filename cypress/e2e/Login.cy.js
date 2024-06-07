///<reference types= 'cypress' />

it.only('login test', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'OrangeHRM')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    // //cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click({downArrow})
    // //cy.get('--Select--').select('Admin')
    // cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').select('Admin') 
})