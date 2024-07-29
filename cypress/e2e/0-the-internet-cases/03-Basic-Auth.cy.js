import VisitPage from "../../pageObjects/visitPage";

describe('Basic-Auth', () => {

    beforeEach('', () => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    });

    it('Autorización de usuario por header', () => {
        const visitObj = new VisitPage();

        cy.title().should('include','The Internet')
        visitObj.BasicAuth()

    })

})