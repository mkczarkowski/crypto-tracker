describe('Search bar with name input', () => {
  it("performs Coin search via it's name", () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=search-bar-input]').type('Litecoin');
    cy.get('[data-cy=coin]').should('have.length', 1);
  });
});
