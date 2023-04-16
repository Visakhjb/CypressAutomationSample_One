describe('CheckBox',()=>{
        it('Checking Check Boxes',()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");

        //to select checkbox is visible
        cy.get('#monday').should('be.visible');

        //to select single checkbox and validate if checked
        cy.get('#monday').check().should('be.checked');

        //to uncheck
        cy.get('#monday').uncheck().should('not.be.checked');

        //select all checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        //uncheck all boxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //select first checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');
        
        //select last  checkbox
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');

    })
})