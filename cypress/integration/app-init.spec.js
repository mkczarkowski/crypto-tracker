describe('App', () => {
  it('renders with initial data', () => {
    cy.server();
    cy.route('GET', '/v2/ticker/?limit=100').as('fetchCryptos');
    cy.visit('http://localhost:3000');
    cy.wait('@fetchCryptos', { timeout: 10000 });
    cy.get('[data-cy=coin]').should('have.length', 100);
  });
});
