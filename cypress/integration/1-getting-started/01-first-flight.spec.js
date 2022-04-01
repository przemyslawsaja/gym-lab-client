/// <reference types="cypress" />

describe('login', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should have inputs', () => {
    cy.get('input').should('exist')
  })
})