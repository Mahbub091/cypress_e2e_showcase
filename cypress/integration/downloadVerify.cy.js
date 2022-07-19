/// <reference types="cypress" />

describe('', () => {
  it('downlaod file in mentioned dir', () => {
    cy.downloadFile(
      'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',
      'Downloads',
      'cypress-example.jpg',
    );
    cy.readFile('./Downloads/cypress-example.jpg');
  });
});
