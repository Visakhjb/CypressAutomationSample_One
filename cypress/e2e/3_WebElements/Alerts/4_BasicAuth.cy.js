describe('Basic Auth Alert',()=>{
  it('Basic Auth Approach 1',()=>{
    cy.visit("https://the-internet.herokuapp.com/basic_auth",{
      auth:{
        username:"admin",
        password:"admin"
      }
    });

    cy.get("div[class='example'] p").should('contain.text','Congratulations! You must have the proper credentials.')


  })

  //Approach 2
  it('Basic Auth Approach 2',()=>{
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    cy.get("div[class='example'] p").should('contain.text','Congratulations! You must have the proper credentials.')


  })
})