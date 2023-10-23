import {toStep2} from "./loan-simulation-mock";

describe("Loan Simulation Form", () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/');
    })
    it("validating if 'Nome do solicitante' is invalid", () => {
        cy.get('#name').focus();
        cy.get('#name').blur();
        cy.contains('Preencha o campo').should('be.visible');
    });
    it("validating if 'Valor desejado' is invalid", () => {
        cy.get('#loanAmount').type('0');
        cy.contains('O valor desejado deve ser maior que 0').should('be.visible');
    });
    it("validating if 'Número de parcelas' is invalid", () => {
        cy.get('#numberPlots').type('0');
        cy.contains('O número de parcelas deve ser maior que 0').should('be.visible');
        cy.get('#numberPlots').type('361');
        cy.contains('O número de parcelas não pode ser maior que 360').should('be.visible');
    });
    it("Checking whether error messages are displayed when clicking the simulate button with invalid form", () => {
        cy.get('form').submit();
        cy.contains('Preencha o campo').should('be.visible');
        cy.contains('Existem campos obrigatórios não preenchidos e/ou inválidos.').should('be.visible');
    });
    it("Testing whether the simulate button sends you to the next screen after the form is valid", () => {
        toStep2();
        cy.get('.p-steps-number').contains('2').should('have.css', 'background-color', 'rgba(147, 197, 253, 0.16)');
    });
})
