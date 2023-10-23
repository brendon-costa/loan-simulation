import {toStep2, toStep3, validateLoanValuesInScreen} from "./loan-simulation-mock";

describe("Loan Simulation Result", () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    toStep2();
  })
  it("Testing whether the values are correct on the screen", () => {
    validateLoanValuesInScreen();
  });
  it("Expected to open a modal when clicking the cancel button and close it when clicking no", () => {
    cy.get('#cancel').click();
    cy.contains('Tem certeza de que deseja cancelar o emprestimo?').should('be.visible');
    cy.get('button').contains('Não').click();
    cy.contains('Tem certeza de que deseja cancelar o emprestimo?').should('not.exist');
  });
  it("I expected to open a modal when clicking on the cancel button and send it to step 1 when clicking yes", () => {
    cy.get('#cancel').click();
    cy.contains('Tem certeza de que deseja cancelar o emprestimo?').should('be.visible');
    cy.get('button').contains('Sim').click();
    cy.contains('Tem certeza de que deseja cancelar o emprestimo?').should('not.exist');
    cy.get('.p-steps-number').contains('1').should('have.css', 'background-color', 'rgba(147, 197, 253, 0.16)');
  });
  it("Expected to open a modal when clicking the confirm button and close it when clicking no", () => {
    cy.get('#confirm').click();
    cy.contains('Tem certeza de que deseja confirmar o emprestimo?').should('be.visible');
    cy.get('button').contains('Não').click();
    cy.contains('Tem certeza de que deseja confirmar o emprestimo?').should('not.exist');
  });
  it("I hope that when clicking on the confirm button the user will be redirected to the checkout screen", () => {
    toStep3();
    cy.url().should('include', '/finished?totalAmountWithInterest=105&numberPlots=10&valuePlots=10.5');
  });
})
