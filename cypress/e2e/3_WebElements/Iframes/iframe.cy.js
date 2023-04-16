describe('Handling Frames',()=>{

    it.skip('Approach1',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe  = cy.get('#mce_0_ifr')
                        .its('0.contentDocument.body')
                        .should('be.visible')
                        .then(cy.wrap);

           iframe.clear().type('Welcome')
           
           
    })


    it('Approach -> by calling custom command',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe  = cy.getiframe('#mce_0_ifr');

           iframe.clear().type("Welcome");
           
           
    })
})