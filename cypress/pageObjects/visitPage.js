class VisitPage {

    element = {
        pag01 : () => cy.get(':nth-child(1) > a'),
        pag02 : () => cy.get('ul > :nth-child(2) > a'),
        pag03 : () => cy.get(':nth-child(3) > a'),
        pag04 : () => cy.get(':nth-child(4) > a'),
        pag05 : () => cy.get(':nth-child(5) > a'),
        pag06 : () => cy.get(':nth-child(6) > a'),
        pag07 : () => cy.get(':nth-child(7) > a'),
        pag08 : () => cy.get(':nth-child(8) > a'),
        pag09 : () => cy.get(':nth-child(9) > a'),
        pag10 : () => cy.get(':nth-child(10) > a'),
        pag11 : () => cy.get(':nth-child(11) > a'),
        pag12 : () => cy.get(':nth-child(12) > a'),
        pag13 : () => cy.get(':nth-child(13) > a'),
        pag14 : () => cy.get(':nth-child(14) > a'),
        pag15 : () => cy.get(':nth-child(15) > a'),
        pag16 : () => cy.get(':nth-child(16) > a'),
        pag17 : () => cy.get(':nth-child(17) > a'),
        pag18 : () => cy.get(':nth-child(18) > a'),
        pag19 : () => cy.get(':nth-child(19) > a'),
        pag20 : () => cy.get(':nth-child(20) > a'),
        pag21 : () => cy.get(':nth-child(21) > a'),
        pag22 : () => cy.get(':nth-child(22) > a'),
        pag23 : () => cy.get(':nth-child(23) > a'),
        pag24 : () => cy.get(':nth-child(24) > a'),
        pag25 : () => cy.get(':nth-child(25) > a'),
        pag26 : () => cy.get(':nth-child(26) > a'),
        pag27 : () => cy.get(':nth-child(27) > a'),
        pag28 : () => cy.get(':nth-child(28) > a'),
        pag29 : () => cy.get(':nth-child(29) > a'),
        pag30 : () => cy.get(':nth-child(30) > a'),
        pag31 : () => cy.get(':nth-child(31) > a'),
        pag32 : () => cy.get(':nth-child(32) > a'),
        pag33 : () => cy.get(':nth-child(33) > a'),
        pag34 : () => cy.get(':nth-child(34) > a'),
        pag35 : () => cy.get(':nth-child(35) > a'),
        pag36 : () => cy.get(':nth-child(36) > a'),
        pag37 : () => cy.get(':nth-child(37) > a'),
        pag38 : () => cy.get(':nth-child(38) > a'),
        pag39 : () => cy.get(':nth-child(39) > a'),
        pag40 : () => cy.get(':nth-child(40) > a'),
        pag41 : () => cy.get(':nth-child(41) > a'),
        pag42 : () => cy.get(':nth-child(42) > a'),
        pag43 : () => cy.get(':nth-child(43) > a'),
        pag44 : () => cy.get(':nth-child(44) > a')
    };

    ABTesting(element) {
        this.element.pag01().should('have.text','A/B Testing').and('be.visible').click()
    };
    AddRemoveElemments(element){
        this.element.pag02().should('have.text','Add/Remove Elements').and('be.visible').click()
    };
    BasicAuth(){
        cy.get('h3').should('have.text','Basic Auth').and('be.visible')
        cy.contains('Congratulations')
    };
    BrokenImages(element){
        this.element.pag04().should('have.text','Broken Images').and('be.visible').click()
    }

}

export default VisitPage