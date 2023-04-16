describe('Alerts',()=>{
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
    cy.window().then((win)=>{
       
        cy.stub(win,'prompt').returns('welcome');

    })

    cy.get("button[onclick='jsPrompt()']").click();

    cy.on('window:confirm',()=>false);

    cy.get('#result').should('have.text','You entered: null');

  })

})