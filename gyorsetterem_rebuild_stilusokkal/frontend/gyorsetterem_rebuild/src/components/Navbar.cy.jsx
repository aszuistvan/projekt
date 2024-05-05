import React from 'react';
import { mount } from '@cypress/react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Navbar />', () => {
  it('renders and clicks all buttons', () => {
    mount(
      <Router>
        <Navbar />
      </Router>
    );

    // A gombokat vegigkattintja a navbarban
    cy.get('a').each(($el, index, $list) => {
      cy.wrap($el).click();
    });
  });
});
