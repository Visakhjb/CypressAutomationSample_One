describe('File Upload DragAndDrop',()=>{

    it('Multiple File Upload',()=>{

        
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

    cy.get('#filesToUpload').attachFile(["API.docx","Library.docx"]);
    cy.wait(5000);




    })

})