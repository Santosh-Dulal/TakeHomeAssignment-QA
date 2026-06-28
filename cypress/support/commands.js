// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (role) => {

    cy.fixture('loginData').then((users) => {

        const user = users[role]

        if (!user) {
            throw new Error(`Role '${role}' not found in loginData fixture`)
        }

        cy.visit('/login')

        cy.get('#username').clear().type(user.username)
        cy.get('#password').clear().type(user.password)

        cy.get('#loginBtn').click()
    })
})