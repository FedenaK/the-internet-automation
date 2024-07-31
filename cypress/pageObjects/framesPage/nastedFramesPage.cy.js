class FramePage {

//Nasted Frames

    //TOP FRAMES
    getFrameTopDocument() {
    return cy.get('frameset').find('frame:nth-child(1)').its('0.contentDocument').should('exist');
    };
    getFrameTopBody() {
        return this.getFrameTopDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap);
    };
    validateChildsFrames(nthChild, src, text) {
        this.getFrameTopBody()
            .find(`frame:nth-child(${nthChild})`).should('have.attr', 'src', src)
            .its('0.contentDocument.body').should('contain', text);
    };
    validateTopFrames() {
        const validations = [
            { nthChild: 1, src: '/frame_left', text: 'LEFT' },
            { nthChild: 2, src: '/frame_middle', text: 'MIDDLE' },
            { nthChild: 3, src: '/frame_right', text: 'RIGHT' }
        ];
        validations.forEach(({ nthChild, src, text }) => {
            this.validateChildsFrames(nthChild, src, text);
        });
    };
    //BOTTOM FRAMES
    getFrameBotDocument() {
        return cy.get('frameset').find('frame:nth-child(2)').its('0.contentDocument').should('exist');
    };
    getFrameBotBody() {
        return this.getFrameBotDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap);
    };
    validateBotFrame() {
        this.getFrameBotBody()
        .should('contain','BOTTOM')
    };

//iFrames
    validateFileEditViewFormat(nthChild, text) {
        cy.get('.tox-menubar').find(`:nth-child(${nthChild}) > .tox-mbtn__select-label`).should('have.text',text)
    };
    validateMenuBar() {
        const validations = [
            { nthChild: 1, text: 'File'},
            { nthChild: 2, text: 'Edit'},
            { nthChild: 3, text: 'View'},
            { nthChild: 4, text: 'Format'}
        ];
        validations.forEach(({ nthChild, text }) => {
            this.validateFileEditViewFormat(nthChild, text)
        })
    }
    validateToolbar() {
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord.tox-tbtn--disabled > div > div:nth-child(1) > button:nth-child(1)').should('be.visible').and('have.class','tox-tbtn tox-tbtn--disabled')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord.tox-tbtn--disabled > div > div:nth-child(1) > button:nth-child(2)').should('be.visible').and('have.class','tox-tbtn tox-tbtn--disabled')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord.tox-tbtn--disabled > div > div:nth-child(2) > button').should('be.visible').and('have.attr','title','Formats')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord.tox-tbtn--disabled > div > div:nth-child(3) > button:nth-child(1)').should('be.visible').and('have.attr','title','Bold')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord.tox-tbtn--disabled > div > div:nth-child(3) > button:nth-child(2)').should('be.visible').and('have.attr','title','Italic')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord.tox-tbtn--disabled > div > div:nth-child(4) > button:nth-child(1)').should('be.visible').and('have.attr','title','Align left')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord.tox-tbtn--disabled > div > div:nth-child(4) > button:nth-child(2)').should('be.visible').and('have.attr','title','Align center')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord.tox-tbtn--disabled > div > div:nth-child(4) > button:nth-child(3)').should('be.visible').and('have.attr','title','Align right')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord.tox-tbtn--disabled > div > div:nth-child(4) > button:nth-child(4)').should('be.visible').and('have.attr','title','Justify')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord.tox-tbtn--disabled > div > div:nth-child(5) > button:nth-child(1)').should('be.visible').and('have.attr','title','Decrease indent')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord.tox-tbtn--disabled > div > div:nth-child(5) > button:nth-child(2)').should('be.visible').and('have.attr','title','Increase indent')
    }

    getIframeDocument() {
        return cy.get('iframe').its('0.contentDocument').should('exist')
    };
    getIframeBody() {
        return this.getIframeDocument()
            .its('body').should('have.attr','id','tinymce')
            .then(cy.wrap)
    };
    validateIframe() {
        this.getIframeBody()
        .should('contain','Your content goes here.')
    }

};

export default FramePage;
