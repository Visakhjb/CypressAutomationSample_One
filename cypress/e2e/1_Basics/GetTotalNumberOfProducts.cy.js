describe('AmazonGetTextForWashingMachine', () =>{

    it('NumberOfMobiles',()=>{
        cy.visit("https://www.amazon.in");
        cy.get("input[placeholder='Search Amazon.in']").type('Washing machine')
        cy.get("input#nav-search-submit-button").click();
        cy.xpath("//div[@class='a-section a-spacing-small a-spacing-top-small']/span[1]").should('contain.text','1-16 of over 1,000 results for');
    })

}

)