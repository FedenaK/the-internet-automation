import VisitPage from "../../pageObjects/visitPage";

describe('Dropdown', () => {
    beforeEach('', () => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Se van a seleccionar objetos de una lista', () => {
        const visitObj = new VisitPage();
        
        visitObj.HomeTexts();
        visitObj.Dropdown();
        
        cy.url('/dropdown')
        cy.get('h3').should('be.visible').and('have.text','Dropdown List')
        //Select by name:
        cy.get('#dropdown').select('Option 1').select('Option 2');
        //Select by index:
        cy.get('#dropdown').select(1).select(2);
    })
})