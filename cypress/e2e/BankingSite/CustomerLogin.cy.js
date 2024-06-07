describe('Customer Login', ()=>{
    it('Login', ()=>{

        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get('.borderM > :nth-child(1) > .btn').should('have.text', 'Customer Login').click()
        cy.get('.form-group').contains('Your Name')
        cy.get('#userSelect').select('Ron Weasly')
        cy.get('form.ng-valid > .btn').should('have.text', 'Login').click()
        cy.get('.fontBig').should('have.text', 'Ron Weasly')

        //Account Details
        cy.get('.borderM > :nth-child(3)').should('have.text', 'Account Number : 1007 , \n\tBalance : 0 , \n\tCurrency : Dollar')

        //Transaction Details
        cy.get('[ng-class="btnClass1"]').click()
        cy.get('[style="height:300px;"]').should('be.visible')
        cy.get('.fixedTopBox > [style="float:left"]').click()
        cy.get('.borderM').should('be.visible')

        //Failed Transaction on withdrawal
        cy.get('[ng-class="btnClass3"]').click()
        cy.get('.form-control').type('1000')
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.error').should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.')

        //Deposit of Amount
        cy.get('[ng-class="btnClass2"]').should('have.text', 'Deposit\n\t\t\n\t\t').click()
        cy.get('label').should('have.text', 'Amount to be Deposited :')
        cy.get('.form-control').type('5000')
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.error').should('have.text','Deposit Successful')
        cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('have.text','5000')

        //Checking if withdrawal could be successfull
        cy.get('[ng-class="btnClass3"]').click()
        cy.get('.form-control').type('1000')
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.error').should('have.text', 'Transaction successful')
        cy.wait(1000)

        //Checking Transaction Details are available
        cy.get('[ng-class="btnClass1"]').click()
        cy.get('.table').should('be.visible')
        cy.get('#anchor0 > :nth-child(2)').should('have.text', '5000')
        cy.get('#anchor0 > :nth-child(3)').should('have.text', 'Credit')
        cy.get('#anchor1 > :nth-child(2)').should('have.text', '1000')
        cy.get('#anchor1 > :nth-child(3)').should('have.text', 'Debit')
        cy.get('.fixedTopBox > [style="float:left"]').click()


       //Checking if Rupee is available
        cy.get('[name="accountSelect"]').select('1008').should('have.value', 'number:1008')
        cy.get('.borderM > :nth-child(3) > :nth-child(3)').should('have.text', 'Pound')
    })
})