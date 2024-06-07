
import 'cypress-iframe'

require('@4tw/cypress-drag-drop')

describe('Mouse Action', ()=>{
    it('Mouse Hover', ()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get(':nth-child(2) > .dropdown-toggle').trigger('mouseover')
        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)')
        .should('have.text', 'Macs (0)')
    })

    it('Mouse RightClick', ()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('span.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('li.context-menu-item.context-menu-icon.context-menu-icon-edit').should('have.text', 'Edit').click()
    })

    it('Double Click', ()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('#iframeResult')
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()

        cy.iframe('#iframeResult').find('input#field2').should('have.value', 'Hello World!')
    })

    it('drag and drop', ()=>{
        cy.visit('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box7').drag('#box107')
        cy.get('#box107').should('contain', 'Madrid')
    })

    it.only('Scrolling' , ()=>{
        cy.visit('https://www.worldometers.info/geography/alphabetical-list-of-countries/')
        cy.get(':nth-child(65) > [style="font-weight: bold; font-size:15px"]').scrollIntoView()
    })
})