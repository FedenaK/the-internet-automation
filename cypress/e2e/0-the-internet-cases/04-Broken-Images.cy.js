import VisitPage from "../../pageObjects/visitPage";

describe('Broken-Images', () => {
    beforeEach('', () => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Validación de imágenes y sus atributos', () => {
        const visitObj = new VisitPage();
        const brokenImages = []

        cy.title().should('include','The Internet')
        cy.get('.heading').should('have.text','Welcome to the-internet').and('be.visible')
        cy.get('h2').should('have.text','Available Examples').and('be.visible')
        visitObj.BrokenImages()
        cy.url('/broken_images')
        cy.get('h3').should('have.text','Broken Images').and('be.visible')
        cy.get('img')
            .each(($el, k) => {
                if($el.prop('naturalWidth') === 0) {
                    const src = $el.attr('src')
                    const info = `${src ? '#' + src : ' '}`
                    brokenImages.push(info)
                    cy.log(`Broken image ${k + 1}: ${info}`)
                }
            })
            .then(() => {
                if (brokenImages.length) {
                    throw new Error (
                        `Found ${
                            brokenImages.length
                        } broken images\n${brokenImages.join(',')}`,
                    )
                }
            })
        /*
        cy.get('#content > div > img:nth-child(2)').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
        cy.get('#content > div > img:nth-child(3)').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
        cy.get('#content > div > img:nth-child(4)').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
        */
    })
})