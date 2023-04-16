describe('Alerts',()=>{

    //Javascript Alert - with some text and ok button

   it('Javascript Alert',()=>{
     cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

     cy.get("button[onclick='jsAlert()']").click();

     cy.on('window:alert',(t)=>{

        expect(t).to.contain('I am a JS Alert')

     })

     //cypress automatically close window by itslef
     cy.get('#result').should('have.text','You successfully clicked an alert');

   })



})