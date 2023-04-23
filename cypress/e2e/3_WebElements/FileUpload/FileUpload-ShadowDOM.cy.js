describe('File Upload DragAndDrop',()=>{

    it('Shadow DOM File Upload',()=>{

        
    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');

    cy.get('.smart-file-upload-header',{includeShadowDom:true}).attachFile("API.docx");
    cy.wait(5000);




    })

})