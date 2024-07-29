// iframePage.js

class IframePage {
    getIframeDocument() {
        return cy
            .get('frame[src="/frame_top"]').its('0.contentDocument').should('exist');
    }

    getIframeBody() {
        return this.getIframeDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap);
    }

    getIframeTopDocument() {
        return this.getIframeBody()
            .get('frameset').find('frame:nth-child(1)').its('0.contentDocument').should('exist');
    }

    getIframeTopBody() {
        return this.getIframeTopDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap);
    }

    validateIframe(nthChild, src, text) {
        this.getIframeTopBody()
            .find(`frame:nth-child(${nthChild})`).should('have.attr', 'src', src)
            .its('0.contentDocument.body').should('contain', text);
    }

    validateIframes() {
        const validations = [
            { nthChild: 1, src: '/frame_left', text: 'LEFT' },
            { nthChild: 2, src: '/frame_middle', text: 'MIDDLE' },
            { nthChild: 3, src: '/frame_right', text: 'RIGHT' }
        ];

        validations.forEach(({ nthChild, src, text }) => {
            this.validateIframe(nthChild, src, text);
        });
    }
}

export default IframePage;
