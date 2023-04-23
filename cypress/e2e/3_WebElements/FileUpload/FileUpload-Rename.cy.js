describe('File Upload Rename',()=>{

    it('File Upload Rename',()=>{

        
    cy.visit('https://the-internet.herokuapp.com/upload');

    cy.get('#file-upload').attachFile({filePath:'API.docx',fileName:'API_NEW.docx'});
    cy.get('#file-submit').click();

    cy.get('h3').should('have.text','File Uploaded!');

    })

})