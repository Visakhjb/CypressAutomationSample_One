describe('Handling Child Tabs -Approach 1',()=>{

    it('Handling Child Tabs -Approach 1 using remove target attribut',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows'); //parent tab

        cy.get('div.example>a').invoke('removeAttr','target').click(); //remove target and click hyperlink

        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new'); //check child tab url

        cy.wait(2000)

        cy.go('back');


    })

    it('Handling Child Tabs -Approach 2 using href ',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows'); //parent tab

        cy.get('div.example>a').then((x)=>{

            let url = x.prop('href');

            cy.visit(url);

            cy.url().should('eq','https://the-internet.herokuapp.com/windows/new'); //check child tab url
            
            cy.wait(2000)

            cy.go('back');


        })


    })

   
})