describe('MyTestSuite',()=>{
    it('AccessUsingFixtures',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('Orangehrm').then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.wait(5000)
            cy.get(".oxd-topbar-header-title h6").should('have.text','Dashboard')
        })
    })

    it.only('UsingMultipleData',()=>{
        cy.fixture('Orangehrm2').then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach((userData)=>{
                cy.get("input[placeholder='Username']").type(userData.username)
                cy.get("input[placeholder='Password']").type(userData.password)
                cy.get("button[type='submit']").click()

                if(userData.username == "Admin" && userData.password == "admin123"){
                    cy.get(".oxd-topbar-header-title h6").should('have.text','Dashboard')
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click()
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click()
                }
            })
           
            
        })
    })
})