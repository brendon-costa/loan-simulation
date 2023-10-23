
export const valueForm = {
  name: 'Brendon Costa',
  loanAmount: '100',
  numberPlots: '10'
}
export const toStep2 = () => {
  cy.get('#name').type(valueForm.name);
  cy.get('#loanAmount').type(valueForm.loanAmount);
  cy.get('#numberPlots').type(valueForm.numberPlots);
  cy.get('form').submit();
}

export const toStep3 = () => {
  cy.get('#confirm').click();
  cy.contains('Tem certeza de que deseja confirmar o emprestimo?').should('be.visible');
  cy.get('button').contains('Sim').click();
}

export const validateLoanValuesInScreen = () => {
  cy.contains('R$ 10,50').should('be.visible');
  cy.contains('10').should('be.visible');
  cy.contains('R$ 105,00').should('be.visible');
}
