import {toStep2, toStep3, validateLoanValuesInScreen} from "./loan-simulation-mock";

describe("Loan Simulation Finished", () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    toStep2();
    toStep3();
  })
  it("Testing whether the values are correct on the screen", () => {
    validateLoanValuesInScreen();
  });
  it("Testing whether clicking on the 'Simulate again' button is redirected to the home page", () => {
    cy.get('#simulate-again').click();
    cy.url().should('include', '/');
  });
})
