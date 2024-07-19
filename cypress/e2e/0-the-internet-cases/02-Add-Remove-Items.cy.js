import VisitPage from "../../pageObjects/visitPage";

describe('Add-Remove-Items', () => {

    beforeEach('', () => {
        cy.visit('https://the-internet.herokuapp.com/')
    });

    it('Agregar un boton y después eliminarlo', () => {
        const visitObj = new VisitPage();

        cy.title().should('include','The Internet')
        cy.get('.heading').should('have.text','Welcome to the-internet').and('be.visible')
        cy.get('h2').should('have.text','Available Examples').and('be.visible')
        visitObj.AddRemoveElemments()
        cy.url('/add_remove_elements')
        cy.get('h3').should('have.text','Add/Remove Elements').and('be.visible')
        cy.get('#elements').should('not.be.visible')
        cy.get('button').should('have.text','Add Element').and('be.visible').click()
        cy.pause(cy.log('Click "Start" to resume'))
        cy.get('#elements').should('be.visible').find('button').should('have.text','Delete').click()

    })

})