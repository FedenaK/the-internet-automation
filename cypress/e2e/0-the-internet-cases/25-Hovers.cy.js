import VisitPage from "../../pageObjects/visitPage";

context('Hovers', () => {
    beforeEach('', () => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Hovers and validations', () => {
        const visitObj = new VisitPage();
        
        visitObj.HomeTexts();
        visitObj.Hovers();
        
        cy.url('/hovers')
        cy.get('h3').should('be.visible').and('have.text','Hovers')
        cy.get('p').should('be.visible').and('have.text','Hover over the image for additional information')
        //First image
        cy.get('.figcaption').first().invoke('show')
        cy.get('.figcaption').first()
            .should('be.visible').and('contain','name: user1')
            .contains('View profile').should('have.attr','href','/users/1')
        //Second image
        cy.get('#content > div > div:nth-child(4) > div').invoke('show')
        cy.get('#content > div > div:nth-child(4) > div')
            .should('be.visible').and('contain','name: user2')
            .contains('View profile').should('have.attr','href','/users/2')
        //Third image
        cy.get('#content > div > div:nth-child(5) > div').invoke('show')
        cy.get('#content > div > div:nth-child(5) > div')
            .should('be.visible').and('contain','name: user3')
            .contains('View profile').should('have.attr','href','/users/3').click()
        cy.intercept('/users/1').url('/users/3')
        cy.get('h1').should('have.text','Not Found')

    });
})