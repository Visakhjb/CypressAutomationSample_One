describe('File Upload DragAndDrop',()=>{

    it('File Upload Drag and Drop',()=>{

        
    cy.visit('https://the-internet.herokuapp.com/upload');

    cy.get('#drag-drop-upload').attachFile('API.docx',{subjectType:'drag-n-drop'});
    cy.get('#file-submit').click();

    cy.get('h3').should('have.text','File Uploaded!');
    })

})