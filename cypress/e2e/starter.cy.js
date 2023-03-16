describe('starter spec', () => {
  it('shows a hello message', () => {
    cy.visit('/');
    cy.contains('Hello, React Native!');
  });
});
