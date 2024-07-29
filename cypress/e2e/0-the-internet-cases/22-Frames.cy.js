import VisitPage from "../../pageObjects/visitPage";
import FramePage from "../../pageObjects/framesPage/framesPage.cy";

describe('Frames', () => {
    beforeEach('', () => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Se van a probar los "Nested Frames"', () => {
        const visitObj = new VisitPage();
        const FrameObj = new FramePage();
        
        visitObj.HomeTexts();
        visitObj.Frames();

        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.url('/frames')
        cy.get(':nth-child(1) > a').should('have.text','Nested Frames').click()

        cy.log('Validating Top Frames: ');
        FrameObj.validateTopFrames();
        cy.log('Validating Bottom Frames');
        FrameObj.validateBotFrame();

    });
});