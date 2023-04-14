describe(
  'AmazonSearch', () => {
    it('CheckeAmazonPageTitle', () => {
      //positive test
      cy.visit("https://www.amazon.in");
      cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    })

    it('UsingID_SearchMobilesByClickingEnter', () => {
      //positive test
      cy.visit("https://www.amazon.in");
      cy.get('input#twotabsearchtextbox').type('mobiles{enter}')
    })


    it('UsingAttribute_SearchMobilesByClickingEnter', () => {
      //positive test
      cy.visit("https://www.amazon.in");
      cy.get("input[placeholder='Search Amazon.in']").type('mobiles')
      cy.get("input#nav-search-submit-button").click();
    })

  })