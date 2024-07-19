import VisitPage from "../../pageObjects/visitPage";
describe('AB-Testing', () => {

    beforeEach('', () => {
        cy.visit('https://the-internet.herokuapp.com/')
    });

    it('Ir a la página 1 y validar los textos', () => {
        const visitObj = new VisitPage();

        cy.title().should('include','The Internet')
        cy.get('.heading').should('have.text','Welcome to the-internet').and('be.visible')
        cy.get('h2').should('have.text','Available Examples').and('be.visible')
        visitObj.ABTesting()
        cy.url('/abtest')
        cy.contains('A/B Test Control').should('be.visible')
        cy.get('p').should('be.visible')
    });

});