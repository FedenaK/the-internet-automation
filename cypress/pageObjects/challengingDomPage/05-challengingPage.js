class ChallengingDomPage {

    element = {
        elemento0 : () => {
            cy.get('tbody > :nth-child(1) > :nth-child(1)').should('be.visible').and('have.text','Iuvaret0')
            cy.get('tbody > :nth-child(1) > :nth-child(2)').should('be.visible').and('have.text','Apeirian0')
            cy.get('tbody > :nth-child(1) > :nth-child(3)').should('be.visible').and('have.text','Adipisci0')
            cy.get('tbody > :nth-child(1) > :nth-child(4)').should('be.visible').and('have.text','Definiebas0')
            cy.get('tbody > :nth-child(1) > :nth-child(5)').should('be.visible').and('have.text','Consequuntur0')
            cy.get('tbody > :nth-child(1) > :nth-child(6)').should('be.visible').and('have.text','Phaedrum0')
            cy.get('tbody > :nth-child(1) > :nth-child(7)').should('be.visible')
                .get(':nth-child(1) > :nth-child(7) > [href="#edit"]').should('be.visible').and('have.text','edit')
                .get(':nth-child(1) > :nth-child(7) > [href="#delete"]').should('be.visible').and('have.text','delete')
        },
        elemento1 : () => {
            cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible').and('have.text','Iuvaret1')
            cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible').and('have.text','Apeirian1')
            cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible').and('have.text','Adipisci1')
            cy.get('tbody > :nth-child(2) > :nth-child(4)').should('be.visible').and('have.text','Definiebas1')
            cy.get('tbody > :nth-child(2) > :nth-child(5)').should('be.visible').and('have.text','Consequuntur1')
            cy.get('tbody > :nth-child(2) > :nth-child(6)').should('be.visible').and('have.text','Phaedrum1')
            cy.get('tbody > :nth-child(2) > :nth-child(7)').should('be.visible')
                .get(':nth-child(2) > :nth-child(7) > [href="#edit"]').should('be.visible').and('have.text','edit')
                .get(':nth-child(2) > :nth-child(7) > [href="#delete"]').should('be.visible').and('have.text','delete')
        },
        elemento2 : () => {
            cy.get('tbody > :nth-child(3) > :nth-child(1)').should('be.visible').and('have.text','Iuvaret2')
            cy.get('tbody > :nth-child(3) > :nth-child(2)').should('be.visible').and('have.text','Apeirian2')
            cy.get('tbody > :nth-child(3) > :nth-child(3)').should('be.visible').and('have.text','Adipisci2')
            cy.get('tbody > :nth-child(3) > :nth-child(4)').should('be.visible').and('have.text','Definiebas2')
            cy.get('tbody > :nth-child(3) > :nth-child(5)').should('be.visible').and('have.text','Consequuntur2')
            cy.get('tbody > :nth-child(3) > :nth-child(6)').should('be.visible').and('have.text','Phaedrum2')
            cy.get('tbody > :nth-child(3) > :nth-child(7)').should('be.visible')
                .get(':nth-child(3) > :nth-child(7) > [href="#edit"]').should('be.visible').and('have.text','edit')
                .get(':nth-child(3) > :nth-child(7) > [href="#delete"]').should('be.visible').and('have.text','delete')
        },
        elemento3 : () => {
            cy.get('tbody > :nth-child(4) > :nth-child(1)').should('be.visible').and('have.text','Iuvaret3')
            cy.get('tbody > :nth-child(4) > :nth-child(2)').should('be.visible').and('have.text','Apeirian3')
            cy.get('tbody > :nth-child(4) > :nth-child(3)').should('be.visible').and('have.text','Adipisci3')
            cy.get('tbody > :nth-child(4) > :nth-child(4)').should('be.visible').and('have.text','Definiebas3')
            cy.get('tbody > :nth-child(4) > :nth-child(5)').should('be.visible').and('have.text','Consequuntur3')
            cy.get('tbody > :nth-child(4) > :nth-child(6)').should('be.visible').and('have.text','Phaedrum3')
            cy.get('tbody > :nth-child(4) > :nth-child(7)').should('be.visible')
                .get(':nth-child(4) > :nth-child(7) > [href="#edit"]').should('be.visible').and('have.text','edit')
                .get(':nth-child(4) > :nth-child(7) > [href="#delete"]').should('be.visible').and('have.text','delete')
        },
        elemento4 : () => {
            cy.get('tbody > :nth-child(5) > :nth-child(1)').should('be.visible').and('have.text','Iuvaret4')
            cy.get('tbody > :nth-child(5) > :nth-child(2)').should('be.visible').and('have.text','Apeirian4')
            cy.get('tbody > :nth-child(5) > :nth-child(3)').should('be.visible').and('have.text','Adipisci4')
            cy.get('tbody > :nth-child(5) > :nth-child(4)').should('be.visible').and('have.text','Definiebas4')
            cy.get('tbody > :nth-child(5) > :nth-child(5)').should('be.visible').and('have.text','Consequuntur4')
            cy.get('tbody > :nth-child(5) > :nth-child(6)').should('be.visible').and('have.text','Phaedrum4')
            cy.get('tbody > :nth-child(5) > :nth-child(7)').should('be.visible')
                .get(':nth-child(5) > :nth-child(7) > [href="#edit"]').should('be.visible').and('have.text','edit')
                .get(':nth-child(5) > :nth-child(7) > [href="#delete"]').should('be.visible').and('have.text','delete')
        },
        elemento5 : () => {
            cy.get('tbody > :nth-child(6) > :nth-child(1)').should('be.visible').and('have.text','Iuvaret5')
            cy.get('tbody > :nth-child(6) > :nth-child(2)').should('be.visible').and('have.text','Apeirian5')
            cy.get('tbody > :nth-child(6) > :nth-child(3)').should('be.visible').and('have.text','Adipisci5')
            cy.get('tbody > :nth-child(6) > :nth-child(4)').should('be.visible').and('have.text','Definiebas5')
            cy.get('tbody > :nth-child(6) > :nth-child(5)').should('be.visible').and('have.text','Consequuntur5')
            cy.get('tbody > :nth-child(6) > :nth-child(6)').should('be.visible').and('have.text','Phaedrum5')
            cy.get('tbody > :nth-child(6) > :nth-child(7)').should('be.visible')
                .get(':nth-child(6) > :nth-child(7) > [href="#edit"]').should('be.visible').and('have.text','edit')
                .get(':nth-child(6) > :nth-child(7) > [href="#delete"]').should('be.visible').and('have.text','delete')
        },
        elemento6 : () => {
            cy.get('tbody > :nth-child(7) > :nth-child(1)').should('be.visible').and('have.text','Iuvaret6')
            cy.get('tbody > :nth-child(7) > :nth-child(2)').should('be.visible').and('have.text','Apeirian6')
            cy.get('tbody > :nth-child(7) > :nth-child(3)').should('be.visible').and('have.text','Adipisci6')
            cy.get('tbody > :nth-child(7) > :nth-child(4)').should('be.visible').and('have.text','Definiebas6')
            cy.get('tbody > :nth-child(7) > :nth-child(5)').should('be.visible').and('have.text','Consequuntur6')
            cy.get('tbody > :nth-child(7) > :nth-child(6)').should('be.visible').and('have.text','Phaedrum6')
            cy.get('tbody > :nth-child(7) > :nth-child(7)').should('be.visible')
                .get(':nth-child(7) > :nth-child(7) > [href="#edit"]').should('be.visible').and('have.text','edit')
                .get(':nth-child(7) > :nth-child(7) > [href="#delete"]').should('be.visible').and('have.text','delete')
        },
        elemento7 : () => {
            cy.get('tbody > :nth-child(8) > :nth-child(1)').should('be.visible').and('have.text','Iuvaret7')
            cy.get('tbody > :nth-child(8) > :nth-child(2)').should('be.visible').and('have.text','Apeirian7')
            cy.get('tbody > :nth-child(8) > :nth-child(3)').should('be.visible').and('have.text','Adipisci7')
            cy.get('tbody > :nth-child(8) > :nth-child(4)').should('be.visible').and('have.text','Definiebas7')
            cy.get('tbody > :nth-child(8) > :nth-child(5)').should('be.visible').and('have.text','Consequuntur7')
            cy.get('tbody > :nth-child(8) > :nth-child(6)').should('be.visible').and('have.text','Phaedrum7')
            cy.get('tbody > :nth-child(8) > :nth-child(7)').should('be.visible')
                .get(':nth-child(8) > :nth-child(7) > [href="#edit"]').should('be.visible').and('have.text','edit')
                .get(':nth-child(8) > :nth-child(7) > [href="#delete"]').should('be.visible').and('have.text','delete')
        },
        elemento8 : () => {
            cy.get('tbody > :nth-child(9) > :nth-child(1)').should('be.visible').and('have.text','Iuvaret8')
            cy.get('tbody > :nth-child(9) > :nth-child(2)').should('be.visible').and('have.text','Apeirian8')
            cy.get('tbody > :nth-child(9) > :nth-child(3)').should('be.visible').and('have.text','Adipisci8')
            cy.get('tbody > :nth-child(9) > :nth-child(4)').should('be.visible').and('have.text','Definiebas8')
            cy.get('tbody > :nth-child(9) > :nth-child(5)').should('be.visible').and('have.text','Consequuntur8')
            cy.get('tbody > :nth-child(9) > :nth-child(6)').should('be.visible').and('have.text','Phaedrum8')
            cy.get('tbody > :nth-child(9) > :nth-child(7)').should('be.visible')
                .get(':nth-child(9) > :nth-child(7) > [href="#edit"]').should('be.visible').and('have.text','edit')
                .get(':nth-child(9) > :nth-child(7) > [href="#delete"]').should('be.visible').and('have.text','delete')
        },
        elemento9 : () => {
            cy.get('tbody > :nth-child(10) > :nth-child(1)').should('be.visible').and('have.text','Iuvaret9')
            cy.get('tbody > :nth-child(10) > :nth-child(2)').should('be.visible').and('have.text','Apeirian9')
            cy.get('tbody > :nth-child(10) > :nth-child(3)').should('be.visible').and('have.text','Adipisci9')
            cy.get('tbody > :nth-child(10) > :nth-child(4)').should('be.visible').and('have.text','Definiebas9')
            cy.get('tbody > :nth-child(10) > :nth-child(5)').should('be.visible').and('have.text','Consequuntur9')
            cy.get('tbody > :nth-child(10) > :nth-child(6)').should('be.visible').and('have.text','Phaedrum9')
            cy.get('tbody > :nth-child(10) > :nth-child(7)').should('be.visible')
                .get(':nth-child(10) > :nth-child(7) > [href="#edit"]').should('be.visible').and('have.text','edit')
                .get(':nth-child(10) > :nth-child(7) > [href="#delete"]').should('be.visible').and('have.text','delete')
        }
    };

    Iuvaret0(element) {
        this.element.elemento0()
    };
    Iuvaret1(element) {
        this.element.elemento1()
    };
    Iuvaret2(element) {
        this.element.elemento2()
    };
    Iuvaret3(element) {
        this.element.elemento3()
    };
    Iuvaret4(element) {
        this.element.elemento4()
    };
    Iuvaret5(element) {
        this.element.elemento5()
    };
    Iuvaret6(element) {
        this.element.elemento6()
    };
    Iuvaret7(element) {
        this.element.elemento7()
    };
    Iuvaret8(element) {
        this.element.elemento8()
    };
    Iuvaret9(element) {
        this.element.elemento9()
    };
}

export default ChallengingDomPage