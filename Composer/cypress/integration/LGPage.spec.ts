// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

context('LG Page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('COMPOSER_URL'));
    cy.createBot('TodoSample');
  });

  it('can open language generation page', () => {
    cy.findByTestId('LeftNav-CommandBarButtonBot Responses').click();
    // left nav tree
    cy.contains('TodoSample.Main');
    cy.contains('All');

    cy.get('.toggleEditMode button').as('switchButton');

    // by default is table view
    cy.findByTestId('LGEditor')
      .findByTestId('table-view')
      .should('exist');
    // goto edit-mode
    cy.get('@switchButton').click();
    cy.findByTestId('LGEditor')
      .get('.monaco-editor')
      .should('exist');

    // back to table view
    cy.get('@switchButton').click();

    // nav to Main dialog
    cy.get('.dialogNavTree a[title="__TestTodoSample.Main"]').click();
    // cy.wait(300);

    // dialog filter, edit mode button is disabled.
    cy.get('@switchButton').should('be.disabled');
  });
});
