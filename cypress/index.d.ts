declare global {
    namespace Cypress {
      interface Chainable<Subject> {
        /**
         * Should login
         * @param user
         * @example cy.login()
         */
        login(user?: string): Chainable<any>;
      }
    }
  }