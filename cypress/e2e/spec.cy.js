describe('register', () => {
  it('login', () => {
//////Login

  cy.visit('https://parabank.parasoft.com/parabank/index.htm') 

  cy.fixture('example').then((data)=>{
  cy.get(':nth-child(2) > .input').type(data.name)
  cy.get(':nth-child(4) > .input').type(data.password)
  cy.get(':nth-child(5) > .button').click()
  cy.get('#showOverview > .title')
  .should('have.text',data.expected)   
  ////Open Account
    cy.get('#leftPanel > ul > :nth-child(1) > a')
    .click()
    cy.get('#type').select('SAVINGS')
    cy.get('#fromAccountId').select(1)
    cy.get('form > div > .button').click()
    cy.get('#openAccountResult > .title').should('have.text',data.openAccountExpected)  
    ///// Request a Loan
    cy.get('#leftPanel > ul > :nth-child(7) > a').click()
    cy.get('#amount').type('5000')
      cy.get('#downPayment').type('1000')
      cy.get('[colspan="2"] > .button').click()
      cy.get('.form > tbody > :nth-child(1) > [align="right"] > b').should('have.text',data.LoanText)
      cy.get('#leftPanel > ul > :nth-child(3) > a').click()
      cy.get('#amount').type('1000')
      cy.get('#toAccountId').select(1)
      cy.get(':nth-child(4) > .button').click()
      cy.get('#showResult > .title').should('have.text',data.transfetText)
       //////logout//
     cy.get('#leftPanel > ul > :nth-child(8) > a').click()
  })
  })
})
