describe('Single File upload',()=>{

    it('Single File Upload',()=>{

        
    cy.visit('https://the-internet.herokuapp.com/upload');

    cy.get('#file-upload').attachFile('API.docx');
    cy.get('#file-submit').click();

    cy.get('h3').should('have.text','File Uploaded!');

    })

})