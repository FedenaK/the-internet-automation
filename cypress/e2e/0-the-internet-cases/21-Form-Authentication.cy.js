import VisitPage from "../../pageObjects/visitPage";

describe('Form Authentication', () => {
    beforeEach('', () => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('001 - Se va a ingresar el usuario y contraseña correcta', () => {
        const visitObj = new VisitPage();
        
        visitObj.HomeTexts();
        visitObj.FormAuthentication();

        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.url('/login')
        cy.get('h2').should('be.visible').and('have.text','Login Page')
        //Select by name:
        cy.get('h4.subheader').should('contain','log into the secure area');
        //User
        cy.get(':nth-child(1) > .large-6').contains('Username')
        cy.get('#username').type('tomsmith');
        //Password
        cy.get(':nth-child(2) > .large-6').contains('Password')
        cy.get('#password').type('SuperSecretPassword!');
        //Login Button
        cy.get('button.radius').contains('Login').click();

        //New Url
        cy.url('/secure');
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });

        cy.get('#flash').should('be.visible').and('contain','secure area!').should('have.css','background-color','rgb(93, 164, 35)')
        cy.get('h2').should('be.visible').and('contain','Secure Area')
        cy.get('.subheader').should('be.visible').and('contain','Welcome')
        //Logout
        cy.get('.button').should('contain','Logout').and('have.css','background-color','rgb(233, 233, 233)').click()
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.url('/login');
    });

    it('002 - Se va a ingresar el usuario incorrecto y contraseña correcta, luego validar el mensaje de error del usuario', () => {
        const visitObj = new VisitPage();
        
        visitObj.HomeTexts();
        visitObj.FormAuthentication();

        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.url('/login')
        cy.get('h2').should('be.visible').and('have.text','Login Page')
        //Select by name:
        cy.get('h4.subheader').should('contain','log into the secure area');
        //User
        cy.get(':nth-child(1) > .large-6').contains('Username')
        cy.get('#username').type('tommy');
        //Password
        cy.get(':nth-child(2) > .large-6').contains('Password')
        cy.get('#password').type('SuperSecretPassword!');
        //Login Button
        cy.get('button.radius').contains('Login').click();

        cy.get('#flash').should('be.visible').and('have.css','background-color','rgb(198, 15, 19)').should('contain','Your username is invalid!')
    });

    it('003 - Se va a ingresar el usuario correcto, pero con la contraseña incorrecta y validar el mensaje de error de la contraseña', () => {
        const visitObj = new VisitPage();
        
        visitObj.HomeTexts();
        visitObj.FormAuthentication();

        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 200, body: {} });
        cy.url('/login')
        cy.get('h2').should('be.visible').and('have.text','Login Page')
        //Select by name:
        cy.get('h4.subheader').should('contain','log into the secure area');
        //User
        cy.get(':nth-child(1) > .large-6').contains('Username')
        cy.get('#username').type('tomsmith');
        //Password
        cy.get(':nth-child(2) > .large-6').contains('Password')
        cy.get('#password').type('SuperIncorrectPassword!');
        //Login Button
        cy.get('button.radius').contains('Login').click();

        cy.get('#flash').should('be.visible').and('have.css','background-color','rgb(198, 15, 19)').should('contain','Your password is invalid!')
    })


})