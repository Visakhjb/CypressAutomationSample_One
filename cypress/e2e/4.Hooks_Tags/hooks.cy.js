describe('Hooks',()=>{

    before('before all the IT block',()=>{
        cy.log('***************************BEFORE IT BLOCK***********************');
    })

    after('before all the IT block',()=>{
        cy.log('***************************AFTER IT BLOCK***********************');
    })

    beforeEach('before all the IT block',()=>{
        cy.log('***************************BEFORE EACH IT BLOCK***********************');
    })

    afterEach('before all the IT block',()=>{
        cy.log('***************************AFTER EACH IT BLOCK***********************');
    })

    after('before all the IT block',()=>{
        cy.log('***************************AFTER IT BLOCK***********************');
    })

    it('sample1',()=>{
        cy.log('*******************BLOCK ONE********************');
    })


    it('sample1',()=>{
        cy.log('*******************BLOCK TWO********************');
    })
})