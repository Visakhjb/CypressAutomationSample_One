describe('Alerts',()=>{


   it('Javascript Confirm Alert - OK',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm',(t)=>{

       expect(t).to.contain('I am a JS Confirm')

    })

    cy.get('#result').should('have.text','You clicked: Ok');

  })

  it('Javascript Confirm Alert --cancel',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm',(t)=>{

       expect(t).to.contain('I am a JS Confirm')

    })

    cy.on('window:confirm',()=>false);
    cy.get('#result').should('have.text','You clicked: Cancel');

  })

  

})