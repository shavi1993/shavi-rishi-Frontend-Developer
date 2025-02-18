describe('Food Menu Page', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000'); // Update if different
  });

  it('should load the homepage with header, filters, and food items', () => {
      cy.get('header').should('be.visible');
      cy.get('.filters-section').should('be.visible');
      cy.get('.food-items-section').should('be.visible');
      cy.get('footer').should('be.visible');
  });

  it('should search for food items', () => {
      cy.get('input[placeholder="Search"]').type('Biryani');
      cy.get('.food-item').should('contain', 'Biryani');
  });

  it('should filter food items by area', () => {
      cy.get('.filter-dropdown').click();
      cy.get('.area-option').contains('Indian').click();
      cy.get('.food-item').should('have.length.greaterThan', 0);
  });

  it('should open and close food item modal', () => {
      cy.get('.food-item').first().click();
      cy.get('.food-modal').should('be.visible');
      cy.get('.close-modal').click();
      cy.get('.food-modal').should('not.exist');
  });
});
