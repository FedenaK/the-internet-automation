import VisitPage from "../../pageObjects/visitPage";

context('Floating menu', () => {
    beforeEach('', () => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Floating menu', () => {
        const visitObj = new VisitPage();
        
        visitObj.HomeTexts();
        visitObj.FloatingMenu();
        
        cy.url('/floating_menu')
        cy.get('h3').should('be.visible').and('have.text','Floating Menu')
        cy.get(':nth-child(1) > a').should('be.visible')
        cy.get('ul > :nth-child(2) > a').should('be.visible')
        cy.get(':nth-child(3) > a').should('be.visible')
        cy.get(':nth-child(4) > a').should('be.visible')

        cy.scrollTo('bottom',{easing: 'swing', duration: 2000})
        cy.get(':nth-child(1) > a').should('be.visible').and('have.text','Home').click()
        cy.url('/floating_menu#home')
        cy.get('ul > :nth-child(2) > a').should('be.visible').and('have.text','News').click()
        cy.url('floating_menu#news')
        cy.get(':nth-child(3) > a').should('be.visible').and('have.text','Contact').click()
        cy.url('floating_menu#contact')
        cy.get(':nth-child(4) > a').should('be.visible').and('have.text','About').click()
        cy.url('floating_menu#about')
    });
})