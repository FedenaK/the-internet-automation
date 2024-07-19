import VisitPage from "../../pageObjects/visitPage";

describe('Basic-Auth', () => {

    beforeEach('', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    });

    it('Autorización de usuario por header', () => {
        const visitObj = new VisitPage();

        cy.title().should('include','The Internet')
        visitObj.BasicAuth()

    })

})