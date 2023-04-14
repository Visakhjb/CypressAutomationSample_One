describe(
    'SampleTestSuite', () => {
    it('PositiveTest', () => {
      //positive test
      cy.visit("https://learn.cypress.io/");
      cy.title().should('eq','Learn E2E Testing from the Experts | Cypress Testing Tools')
    })

    it('Negative test', () => {
      //positive test
      cy.visit("https://learn.cypress.io/");
      cy.title().should('eq','Learn E2E Testing from the Experts | Cypress Testing Tools1')
    })
  })