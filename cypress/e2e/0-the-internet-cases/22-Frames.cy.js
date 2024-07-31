import VisitPage from "../../pageObjects/visitPage";
import FramePage from "../../pageObjects/framesPage/nastedFramesPage.cy";

context('Nested Frames & iFrames', () => {
    beforeEach('', () => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Se va a probar la pantalla "Nested Frames"', () => {
        const visitObj = new VisitPage();
        const FrameObj = new FramePage();
        
        visitObj.HomeTexts();
        visitObj.Frames();

        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.url('/frames')
        cy.get(':nth-child(1) > a').should('have.text','Nested Frames').click()
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.url('/nested_frames')

        cy.log('Validating Top Frames: ');
        FrameObj.validateTopFrames();
        cy.log('Validating Bottom Frames');
        FrameObj.validateBotFrame();
    });

    it('Se va a probar la pantalla "iFrames', () => {
        const visitObj = new VisitPage();
        const FrameObj = new FramePage();
        
        visitObj.HomeTexts();
        visitObj.Frames();
        
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.url('/frames')
        cy.get('ul > :nth-child(2) > a').should('have.text','iFrame').click()
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.url('/iframe')

        cy.get('h3').should('contain','An iFrame containing the TinyMCE WYSIWYG Editor')
        cy.get('body > div.tox.tox-silver-sink.tox-tinymce-aux > div > div > button > div > svg').click()
        
        FrameObj.validateMenuBar();
        FrameObj.validateToolbar();

        FrameObj.validateIframe();
        });
});