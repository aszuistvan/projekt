import React from 'react'
import Regisztracio from './Regisztracio'

describe('<Regisztracio />', () => {
  it('renders and fills out the form', () => {
    cy.mount(<Regisztracio />)
    
    // adott id-val ellatott mezok kitoltese
    cy.get('#vnev').type('Vig')
    cy.get('#knev').type('Tamás')
    cy.get('#ir_szam').type('5675')
    cy.get('#telepules_neve').type('Telekgerendás')
    cy.get('#kozterulet_neve').type('Hársfa')
    cy.get('#kozterulet_jellege').type('Utca')
    cy.get('#hazszam').type('31')
    cy.get('#tel_szam').type('06305204693')
    cy.get('#felhasznalo_nev').type('tomibogyo')
    cy.get('#email_cim').type('email@example.com')
    cy.get('#jelszo').type('jelszo123')

    // Regisztracio veglegesitese
    cy.get('#reg_leadas').click()
  })
})
