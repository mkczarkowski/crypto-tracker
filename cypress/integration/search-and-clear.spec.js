describe('Search bar after clear', () => {
  it('gets back to inital state of App', () => {
    cy.server();
    cy.route('GET', '/v2/ticker/?limit=100').as('fetchCryptos');
    cy.visit('http://localhost:3000');
    cy.wait('@fetchCryptos', { timeout: 10000 });
    cy.get('[data-cy=search-bar-input]').type('LTC');
    cy.get('[data-cy=search-bar-input]').clear();
    cy.get('[data-cy=coin]').should('have.length', 100);
  });
});
