class FramePage {

    //TOP FRAMES

    getFrameTopDocument() {
    return cy.get('frameset').find('frame:nth-child(1)').its('0.contentDocument').should('exist');
    }
    getFrameTopBody() {
        return this.getFrameTopDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap);
    }
    validateTopFrame(nthChild, src, text) {
        this.getFrameTopBody()
            .find(`frame:nth-child(${nthChild})`).should('have.attr', 'src', src)
            .its('0.contentDocument.body').should('contain', text);
    }
    validateTopFrames() {
        const validations = [
            { nthChild: 1, src: '/frame_left', text: 'LEFT' },
            { nthChild: 2, src: '/frame_middle', text: 'MIDDLE' },
            { nthChild: 3, src: '/frame_right', text: 'RIGHT' }
        ];
        validations.forEach(({ nthChild, src, text }) => {
            this.validateTopFrame(nthChild, src, text);
        });
    }

    //BOTTOM FRAMES
    getFrameBotDocument() {
        return cy.get('frameset').find('frame:nth-child(2)').its('0.contentDocument').should('exist');
        }
    getFrameBotBody() {
        return this.getFrameBotDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap);
        }
    validateBotFrame() {
        this.getFrameBotBody()
        .should('contain','BOTTOM')
    }


}

export default FramePage;
