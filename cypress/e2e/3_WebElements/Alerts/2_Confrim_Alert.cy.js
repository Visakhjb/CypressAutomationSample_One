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

  it('Javascript Prompt Alert --OK WITH WELCOME MESSAGE',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    //getting control of the prompt window before passing the value into the checkbox
    cy.window().then((win)=>{
       
        cy.stub(win,'prompt').returns('welcome');

    })

    cy.get("button[onclick='jsPrompt()']").click();

    cy.get('#result').should('have.text','You entered: welcome');

  })


  it.only('Javascript Prompt Alert --OK WITH CANCEL MESSAGE',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    //getting control of the prompt window before passing the value into the checkbox
    // cy.window().then((win)=>{
       
    //     cy.stub(win,'prompt').returns('welcome');

    // })

    cy.get("button[onclick='jsPrompt()']").click();

    cy.on('window:confirm',()=>false);

    cy.get('#result').should('have.text','You entered: null');

  })

})