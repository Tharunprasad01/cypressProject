describe('ContactlistApp',()=>{
    it('Signup',()=>{
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
        cy.get('body h1').should('have.text','Contact List App')
        cy.get('#signup').click()
        cy.get(`div[class='main-content'] h1`).should('have.text','Add User')
        cy.get('#firstName').type("Rakesh")
        cy.get('#lastName').type("Kumar")
        cy.get('#email').type('rakeshkumar08@gmail.com')
        cy.get('#password').type('Rakesh1123')
        cy.get('#submit').click()
        cy.get('#add-contact').click()
        cy.get('#firstName').type("Rahul")
        cy.get('#lastName').type("Modi")
        cy.get('#birthdate').type("1975-07-12")
        cy.get('#email').type("rahulmodi01@gmail.com")
        cy.get('#phone').type("12345678908")
        cy.get('#street1').type("1st Street")
        cy.get('#street2').type("Main Road,Delhi")
        cy.get('#city').type("Delhi")
        cy.get('#stateProvince').type("Delhi")
        cy.get('#postalCode').type("600032")
        cy.get('#country').type("India")
        cy.get('#submit').click()
        cy.wait(3000)

        cy.get('#myTable').contains('tr', 'Rahul Modi').within(() => {
            cy.get('td').eq(1).should('contain.text', 'Rahul Modi');
            cy.get('td').eq(2).should('contain.text', '1975-07-12');
            cy.get('td').eq(3).should('contain.text', 'rahulmodi01@gmail.com');
            cy.get('td').eq(5).should('contain.text', '1st Street Main Road,Delhi');
            cy.get('td').eq(6).should('contain.text', 'Delhi Delhi 600032');
            cy.get('td').eq(7).should('contain.text', 'India');
        });
        cy.get('#logout').click()
    })

    it("Login",()=>{
        cy.visit("https://thinking-tester-contact-list.herokuapp.com/")
        cy.get('#email').type("rakeshkumar06@gmail.com")
        cy.get('#password').type("Rakesh1123")
        cy.get('#submit').click()

        cy.get(`div[class='main-content'] header h1`).should('have.text',"Contact List")

        cy.get('#myTable').contains('tr', 'Rahul Modi').within(() => {
            cy.get('td').eq(1).should('contain.text', 'Rahul Modi');
            cy.get('td').eq(2).should('contain.text', '1975-07-12');
            cy.get('td').eq(3).should('contain.text', 'rahulmodi01@gmail.com');
            cy.get('td').eq(5).should('contain.text', '1st Street Main Road,Delhi');
            cy.get('td').eq(6).should('contain.text', 'Delhi Delhi 600032');
            cy.get('td').eq(7).should('contain.text', 'India');
        });
        cy.get('#logout').click()

    })
})