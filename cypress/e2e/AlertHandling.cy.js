/// <reference types = 'cypress' />
describe('Alerts', ()=>{
  it('Windows Alert', ()=>{

      cy.visit('https://testpages.eviltester.com/styled/alerts/alert-test.html')
      cy.get('#alertexamples').click()

      cy.on('window:alert', (t)=>{
          expect(t).contains('I am an alert box')
      })
      cy.get('#alertexplanation').should('have.text', 'You triggered and handled the alert dialog')
      
  })

  it('Windows Confirm', ()=>{

      cy.visit('https://testpages.eviltester.com/styled/alerts/alert-test.html')
      cy.get('#confirmexample').click()

      cy.on('window:confirm', (t)=>{
          expect(t).contains('I am a confirm alert')
          return false
      })

      cy.get('#confirmexplanation').should('have.text', 'You clicked Cancel, confirm returned false.')
      
  })

 
it('Prompt-Ok', ()=>{

cy.visit('https://testpages.eviltester.com/styled/alerts/alert-test.html')
  cy.window().then((win)=>{
      cy.stub(win,'prompt').returns('welcome')
  })
  cy.get('#promptexample').click()
cy.wait(3000)
  // cy.on('window:prompt', (t)=>{
  //     expect(t).contains('I prompt you')
  // })

  cy.get('#promptexplanation').should('have.text', "You clicked OK. 'prompt' returned welcome")
})
  
})