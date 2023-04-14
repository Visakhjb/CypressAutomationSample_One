describe('Asserions Demo',()=>{
 it('ImplicitAssertions',()=>{
  cy.visit("https://www.amazon.in"); 
  
  cy.url().should('include','amazon');
  cy.url().should('eq','https://www.amazon.in/');
  cy.url().should('contain','amazon')

  //removing multiple should
  cy.url().should('include','amazon')
  .should('eq','https://www.amazon.in/')
  .should('contain','amazon')

  //replacing should by add
  cy.url().should('include','amazon')
  .and('eq','https://www.amazon.in/')
  .and('contain','amazon')

  //not contain assertion
  cy.url().should('not.contain','flipkart')

  //gettitle
  cy.title().should('equal','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')

  //check if image is visible
  cy.get('#nav-logo-sprites').should('be.visible')
 
  cy.get('#nav-logo-sprites').should('exist')

  //validating the total number of hyperlinks in the webpage
   cy.xpath("//a").should('have.length',390)

 })   
})