describe('SelectDropdown',()=>{
    it.skip('from Normal Selecttag',()=>
    {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");

        cy.get('#zcf_address_country').select('Canada')
        .should('have.value','Canada')
    })

    it.skip('Without  Selecttag',()=>
    {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

        cy.get('#select2-billing_country-container').type('ICELAND{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Iceland')
    })

    it.skip('Auto Suggest Dropdown',()=>
    {
        cy.visit("https://www.wikipedia.org/");

        cy.get('#searchInput').type('Delhi');

        cy.get('.suggestion-title').contains('Delhi University').click();


        
    })

    it('Dynamic Dropdown',()=>{

        cy.visit('https://www.google.com/');

        cy.get('#APjFqb').type("yahoo");

        cy.wait(2000)

        cy.get('div.wM6W7d>span').should('have.length',12)  //validate the totoal number of auto suggestions in google

        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text()=='yahoo mail')
            {
                cy.wrap($el).click();
            }

        })

        cy.wait(1500)
        cy.get('#APjFqb').should('have.value','yahoo mail')
    })
})