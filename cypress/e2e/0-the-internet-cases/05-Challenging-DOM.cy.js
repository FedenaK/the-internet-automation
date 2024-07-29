import VisitPage from "../../pageObjects/visitPage";
import ChallengingDomPage from "../../pageObjects/challengingDomPage/05-challengingPage";

describe('Challenging-DOM', () => {
    beforeEach('', () => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.visit('https://the-internet.herokuapp.com/')
    });

    it('Validación de tabla y botones con IDs variantes', () => {
        const visitObj = new VisitPage();
        const tableObj = new ChallengingDomPage();

        visitObj.HomeTexts();
        visitObj.ChallengingDOM();
        cy.url('/challenging_dom');
        //Texts
        cy.get('h3').should('be.visible').and('have.text','Challenging DOM');
        cy.get('p').should('be.visible').and('contain','The hardest part in automated web testing is finding the best locators');
        
        //Buttons
        cy.get('.large-2').find('a').eq(0).should('be.visible');
        cy.get('.large-2').find('a').eq(1).should('be.visible');
        cy.get('.large-2').find('a').eq(2).should('be.visible');

        //Table Header
        cy.get('table > thead > tr > th').should('be.visible').and('have.length',7)
            .get('th').eq(0).should('have.text','Lorem')
            .get('th').eq(1).should('have.text','Ipsum')
            .get('th').eq(2).should('have.text','Dolor')
            .get('th').eq(3).should('have.text','Sit')
            .get('th').eq(4).should('have.text','Amet')
            .get('th').eq(5).should('have.text','Diceret')
            .get('th').eq(6).should('have.text','Action');
        //Table Body
        tableObj.Iuvaret0();
        tableObj.Iuvaret1();
        tableObj.Iuvaret2();
        tableObj.Iuvaret3();
        tableObj.Iuvaret4();
        tableObj.Iuvaret5();
        tableObj.Iuvaret6();
        tableObj.Iuvaret7();
        tableObj.Iuvaret8();
        tableObj.Iuvaret9();

        //Image Canvas
        cy.get('#canvas').should('be.visible').and('have.attr','height','200')
    });
});