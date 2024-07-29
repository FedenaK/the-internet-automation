import VisitPage from "../../pageObjects/visitPage";
import IframePage from "../../pageObjects/iFrames/iframesPage.cy";

describe('Frames', () => {
    beforeEach('', () => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Se van a probar los "Nested Frames"', () => {
        const visitObj = new VisitPage();
        const iFrameObj = new IframePage();
        
        visitObj.HomeTexts();
        visitObj.Frames();

        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.url('/frames')
        cy.get(':nth-child(1) > a').should('have.text','Nested Frames').click()
        //cy.get('frameset').get('frame').eq(0).should('have.attr','src','/frame_top')
        //.its('0.document')
        //cy.get('frame[src="/frame_top"]').its('0.contentDocument').should('exist')
        /*getIframeTopBody()
        .find('frame:nth-child(1)').should('have.attr','src','/frame_left');
        getIframeTopBody()
        .find('frame:nth-child(2)').should('have.attr','src','/frame_middle');
        getIframeTopBody()
        .find('frame:nth-child(3)').should('have.attr','src','/frame_right');*/
        //getIframeTopValidation()
        iFrameObj.validateIframes();


    })
})