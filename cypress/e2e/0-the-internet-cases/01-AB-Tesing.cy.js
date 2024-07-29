import VisitPage from "../../pageObjects/visitPage";
describe('AB-Testing', () => {

    beforeEach('', () => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.visit('https://the-internet.herokuapp.com/')
    });

    it('Ir a la página 1 y validar los textos', () => {
        const visitObj = new VisitPage();

        visitObj.HomeTexts();
        visitObj.ABTesting()
        cy.url('/abtest')
        cy.contains('A/B Test Control').should('be.visible')
        cy.get('p').should('be.visible')
    });

});