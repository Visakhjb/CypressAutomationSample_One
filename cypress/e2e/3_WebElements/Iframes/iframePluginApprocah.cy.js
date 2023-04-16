describe('Handling Frames using plugin',()=>{

    it('Approach -> by using plugin',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

       cy.frameLoaded('#mce_0_ifr') //load the frame

       cy.iframe('#mce_0_ifr').clear();

       cy.wait(1000)

       cy.iframe('#mce_0_ifr').type("Welcome to IFRAME");
    
           
           
    })
})