import VisitPage from "../../pageObjects/visitPage";

describe('Context Menu', () => {
    beforeEach('', () => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Click derecho a una caja y ver una alerta de JavaScript', () => {
        const visitObj = new VisitPage();

        visitObj.HomeTexts();
        visitObj.ContextMenu();

        cy.url('/context_menu')
        cy.get('h3').should('be.visible').and('have.text','Context Menu')
        cy.get('.example > :nth-child(2)').should('be.visible').and('contain','right-click menu')
        cy.get('.example > :nth-child(3)').should('be.visible').and('contain','Right-click in the box')
        //cy.get('#hot-spot').rightclick()
        cy.get('#hot-spot').invoke("trigger","contextmenu")
        
        //Se valida la alerta:
        cy.on("window:alert",(alert)=>{
            expect(alert).to.equal("You selected a context menu")
        })

    })
})