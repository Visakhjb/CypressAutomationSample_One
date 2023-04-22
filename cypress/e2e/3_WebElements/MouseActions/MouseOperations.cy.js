describe('Mouse Operations',()=>{
    
    it('mouse over',()=>
    {
        cy.visit("https://demo.opencart.com/");

        cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']")
           .trigger('mouseover')
           .click();
           //doing mouse over and clicking

        cy.get("div[class='dropdown-menu show'] li:nth-child(1) a:nth-child(1)").click();
        cy.get("div[id='content'] p").should('have.text','There are no products to list in this category.');
    })

    it.skip('right click',()=>{
         cy.visit("https://mousetester.com/");
         cy.get('#clickMe').click();

         cy.get('#button_2_normal').should('have.text',0)


         cy.get("div[id='clickMe'] p").rightclick();  //approach 1

         cy.get('#button_2_normal').should('have.text',1)

         cy.get("div[id='clickMe'] p").trigger('contextmenu'); //approach 2

         cy.get('#button_2_normal').should('have.text',2);

    })

    it('Double Click',()=>{

         cy.visit("https://mousetester.com/");
         cy.get('#clickMe').click();

          cy.get('#button_2_normal').trigger('dblclick');

          cy.get('#button_2_normal').dblclick();

    })


})