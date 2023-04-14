describe('ExplicitAssertios',()=>
{
  
    it('Expect',()=>{
        cy.visit("https://www.amazon.in");
        let expectedValue = "Mobiles";
        cy.xpath("//a[text()='Mobiles']").then( (x)=>{

        let actalvalue = x.text();

            expect(expectedValue).to.equal(actalvalue);
            expect(expectedValue).to.not.equal(actalvalue);

        }
        )  
    })
    it('Assert',()=>{
        cy.visit("https://www.amazon.in");
        let expectedValue = "Mobiles";
        cy.xpath("//a[text()='Mobiles']").then( (x)=>{

        let actalvalue = x.text();

            assert.equal(actalvalue,expectedValue);
            assert.notEqual(actalvalue,expectedValue);

        }

        )  

    })

})