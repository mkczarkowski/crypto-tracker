describe('Search bar with acronym input', () => {
  it("performs Coin search via it's acronym", () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=search-bar-input]').type('LTC');
    cy.get('[data-cy=coin]').should('have.length', 1);
  });
});
