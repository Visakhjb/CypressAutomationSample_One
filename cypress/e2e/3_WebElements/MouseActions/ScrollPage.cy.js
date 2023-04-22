describe('Scroll Page',()=>{

    it('Scroll',()=>{

        cy.visit('https://github.com/4teamwork/cypress-drag-drop');


        cy.get(".markdown-body > :nth-child(46)").scrollIntoView();

        cy.get(".markdown-body > :nth-child(15)").scrollIntoView({duration:5000}); //take 5 seconds to scroll into that view
    })
})