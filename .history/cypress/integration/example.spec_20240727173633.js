// cypress/integration/example.spec.js

describe('Flappy Bird Game', () => {
    it('should load the game', () => {
      cy.visit('/');
      cy.contains('Click to play'); // Adjust this based on your actual content
    });
  
    it('should increase score on successful play', () => {
      cy.visit('/');
      cy.get('canvas').click(); // Simulate user interaction
      cy.wait(1000); // Wait for the game to respond
      cy.get('#currentScore').should('not.contain', '0'); // Check if score has changed
    });
  });
  