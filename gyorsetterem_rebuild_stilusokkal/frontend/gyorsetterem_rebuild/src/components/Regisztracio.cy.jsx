import React from 'react'
import Regisztracio from './Regisztracio'

describe('<Regisztracio />', () => {
  it('renders and fills out the form', () => {
    cy.mount(<Regisztracio />)
    
    // adott id-val ellatott mezok kitoltese
    cy.get('#vnev').type('Vezetéknév')
    cy.get('#knev').type('Keresztnév')
    cy.get('#ir_szam').type('1234')
    cy.get('#telepules_neve').type('Település')
    cy.get('#kozterulet_neve').type('Közterület')
    cy.get('#kozterulet_jellege').type('Utca')
    cy.get('#hazszam').type('1')
    cy.get('#tel_szam').type('0612345678')
    cy.get('#felhasznalo_nev').type('felhasznalo')
    cy.get('#email_cim').type('email@example.com')
    cy.get('#jelszo').type('jelszo123')

    // Regisztracio veglegesitese
    cy.get('#reg_leadas').click()
  })
})
