describe('RadioButtonCheckBox',()=>{
    it('RadioButton',()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");

        //check if radio element is visiable and then click
        cy.xpath("//input[@id='female']").should('be.visible').check();

        cy.xpath("//input[@id='male']").should('be.visible').click();

      //  cy.xpath("//input[@id='other']").should('not.be.visible');


        //validate if radio button is checked
        cy.xpath("//input[@id='female']").check().should('be.checked');
        cy.xpath("//input[@id='male']").should('not.be.checked');

        cy.xpath("//input[@id='male']").check().should('be.checked');
        cy.xpath("//input[@id='female']").should('not.be.checked');
    })

    })