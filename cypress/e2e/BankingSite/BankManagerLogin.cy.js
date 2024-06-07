describe('Bank Manager Login', ()=>{
    it('Add Customer', ()=>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get('[ng-click="manager()"]').should('contain', 'Bank Manager Login').click()
        cy.get('[ng-click="addCust()"]').should('contain', 'Add Customer').click()
        cy.get(':nth-child(1) > .form-control').type('Tom')
        cy.get(':nth-child(2) > .form-control').type('Holland')
        cy.get(':nth-child(3) > .form-control').type('600021')
        cy.get('form.ng-dirty > .btn').click()
        
        cy.on('window:alert', (t)=>{
           if(t.includes('Customer added successfully with customer id')){
            expect(t).contains('Customer added successfully with customer id')
        
        //Open Account
        cy.get('[ng-class="btnClass2"]').should('contain', 'Open Account').click()
        cy.get('#userSelect').select('Tom Holland').should('contain', 'Tom Holland')
        cy.get('select#currency').select('Dollar').should('contain', 'Dollar')
        
        cy.get('form.ng-dirty > button').click()
        
    }else if(t.includes('Account created successfully with account Number')){
        expect(t).contains('Account created successfully with account Number')
    }

    })
})
})