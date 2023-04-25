describe('Read Test Data',()=>{

    let userdata;
    before(()=>{
      cy.fixture('testdatafile').then((data)=>{
        userdata = data;
      })
    })

    it('Read test data directly',()=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

            cy.get("input[placeholder='Username']").type(userdata.username);
            cy.get("input[placeholder='Password']").type(userdata.password);

            cy.get("button[type='submit']").click();

            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').
            should('have.text','Dashboard');
    })

})