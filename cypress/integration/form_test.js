describe('My Pizza App Tests', () =>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    });

    const newOrder = () => cy.get('input[id="name-input"]')
    const dropDown = () => cy.get('select')
    const toppingSection = () => cy.get('[type="checkbox"]')
    const specialIntructions = () => cy.get('input[name=instructions]')
    const submitBtn = () => cy.get('button[id="order-button"]')
    const sauceRadio = () => cy.get('[type="radio"]')
   
    it('Sanity test', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

it('Information realying to page test', ()=>{
 newOrder().should('exist')
 dropDown().should('exist')
 toppingSection().should('exist')
 specialIntructions().should('exist')
 submitBtn().should('exist')
 sauceRadio().should('exist')
})

describe('Can the info be submitted?', ()=>{
    it('Has the ability to interact with the page', ()=>{
        newOrder()
        .should('have.value', '')
        .type('Robert')
        .should('have.value', 'Robert')
        dropDown()
        .should('have.value', '')
        .select('Small')
        .select('Medium')
        .select('Large')
        .select('XL')
        toppingSection()
        .check()
        sauceRadio()
        .check()
        specialIntructions()
        .should('have.value', '')
        .type('No instructions')
    
    })
    it('Does the order button work?',()=>{
        newOrder()
        .type('Robert')
        dropDown()
        .select('Small')
        toppingSection()
        .check()
        sauceRadio()
        .check('BBQ')
        
        specialIntructions().type('Well Done')
        submitBtn()
        .click()
    })
}) 


























})