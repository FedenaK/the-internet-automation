import VisitPage from "../../pageObjects/visitPage";


context('Status Code', () => {
    beforeEach('', () => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Status code: 200', () => {
        const visitObj = new VisitPage();
        
        visitObj.HomeTexts();
        visitObj.StatusCodes();
        
        cy.get('h3').should('be.visible').and('have.text','Status Codes')
        cy.get('.example > :nth-child(2)').should('be.visible').and('contain','HTTP status codes are a standard set of numbers used to communicate from a web server to your browser to indicate the outcome of the request being made (e.g. Success, Redirection, Client Error, Server Error). For a complete list of status codes, go here.')
        cy.intercept('GET', '/status_codes/200', (req) => {
            console.log('Request made to /status_codes/200');
            req.continue();
        }).as('getStatus200');
        cy.get('ul > :nth-child(1) > a').should('be.visible').and('have.attr', 'href', 'status_codes/200').click();
        cy.wait('@getStatus200').its('response.statusCode').should('equal', 200);
        cy.log('Status Code 200');
    });
    
    it('Status code: 301', () => {
        const visitObj = new VisitPage();
        
        visitObj.HomeTexts();
        visitObj.StatusCodes();

        cy.get('h3').should('be.visible').and('have.text','Status Codes')
        cy.get('.example > :nth-child(2)').should('be.visible').and('contain','HTTP status codes are a standard set of numbers used to communicate from a web server to your browser to indicate the outcome of the request being made (e.g. Success, Redirection, Client Error, Server Error). For a complete list of status codes, go here.')
        cy.intercept('GET', '/status_codes/301', (req) => {
            console.log('Request made to /status_codes/301');
            req.continue();
        }).as('getStatus301');
        cy.get('ul > :nth-child(2) > a').should('be.visible').and('have.attr', 'href', 'status_codes/301').click();
        cy.wait('@getStatus301').its('response.statusCode').should('equal', 301);
        cy.log('Status Code 301');        
    });

    it('Status code: 404', () => {
        const visitObj = new VisitPage();
        
        visitObj.HomeTexts();
        visitObj.StatusCodes();

        cy.get('h3').should('be.visible').and('have.text','Status Codes')
        cy.get('.example > :nth-child(2)').should('be.visible').and('contain','HTTP status codes are a standard set of numbers used to communicate from a web server to your browser to indicate the outcome of the request being made (e.g. Success, Redirection, Client Error, Server Error). For a complete list of status codes, go here.')
        cy.intercept('GET', '/status_codes/404', (req) => {
            console.log('Request made to /status_codes/404');
            req.continue();
        }).as('getStatus404');
        cy.get('ul > :nth-child(3) > a').should('be.visible').and('have.attr', 'href', 'status_codes/404').click();
        cy.wait('@getStatus404').its('response.statusCode').should('equal', 404);
        cy.log('Status Code 404');        
    });

    it('Status code: 500', () => {
        const visitObj = new VisitPage();
        
        visitObj.HomeTexts();
        visitObj.StatusCodes();

        cy.get('h3').should('be.visible').and('have.text','Status Codes')
        cy.get('.example > :nth-child(2)').should('be.visible').and('contain','HTTP status codes are a standard set of numbers used to communicate from a web server to your browser to indicate the outcome of the request being made (e.g. Success, Redirection, Client Error, Server Error). For a complete list of status codes, go here.')
        cy.intercept('GET', '/status_codes/500', (req) => {
            console.log('Request made to /status_codes/500');
            req.continue();
        }).as('getStatus500');
        cy.get('ul > :nth-child(4) > a').should('be.visible').and('have.attr', 'href', 'status_codes/500').click();
        cy.wait('@getStatus500').its('response.statusCode').should('equal', 500);
        cy.log('Status Code 500');        
    });        
});
