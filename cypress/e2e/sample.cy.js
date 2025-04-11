describe('Перевірка кнопки Sign up', () => {
  it('перевіряє наявність кнопки "Sign up" на сторінці', () => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');

    cy.contains('button', 'Sign up').should('be.visible'); 
  });
});
