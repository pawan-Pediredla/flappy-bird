

describe('Flappy Bird Game', () => {
    it('should load the game and be playable', () => {
      cy.visit('/'); // Adjust based on your base URL
      cy.contains('Click to play').click();
      cy.get('canvas').should('be.visible');
      cy.get('#currentScore').should('not.contain', '0');
    });
  });
  