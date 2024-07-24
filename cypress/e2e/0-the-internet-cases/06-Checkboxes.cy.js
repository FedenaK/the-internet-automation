import VisitPage from "../../pageObjects/visitPage";

describe('Checkboxes', () => {
    beforeEach('', () => {
        cy.visit('https://the-internet.herokuapp.com/')
    });

    it('Check an un check', () => {
        const visitObj = new VisitPage()

        visitObj.HomeTexts();
        visitObj.Checkboxes();

        cy.url('/checkboxes');
        cy.get('h3').should('be.visible').and('have.text','Checkboxes')
        cy.get('#checkboxes > :nth-child(1)').should('be.visible')
        cy.get('[checked=""]').should('have.attr','checked')

        //click checkboxes
        cy.get('#checkboxes > :nth-child(1)').check().should('have.attr','checked')
        cy.get('[checked=""]').eq(1).uncheck().should('not.have.attr','checked')


    })
})