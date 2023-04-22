describe('DragAndDrop',()=>{
    it('DragAnddrop',()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

        cy.get('#box1').wait(3000).drag('#box101',{force:true});
    })
})