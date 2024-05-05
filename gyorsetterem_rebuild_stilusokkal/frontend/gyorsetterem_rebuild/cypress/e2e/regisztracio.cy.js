describe('regisztrációs mezők tesztje', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/regisztracio')
  })

  it('regisztrációs mezők tesztje', () => {
    cy.get('input#vnev').should('exist')
    cy.get('input#knev').should('exist')
    cy.get('input#ir_szam').should('exist')
    cy.get('input#telepules_neve').should('exist')
  })
})
