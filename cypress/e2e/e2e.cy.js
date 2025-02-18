/*
 * File: e2e.js
 * Created Date: Sunday February 16th 2025 10:27:52
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Tuesday February 18th 2025 11:39:59
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://rss-front.vercel.app/')
        cy.get('h1').should('be.visible')
        cy.get('h3').should('be.visible')
        cy.get('a').should('be.visible')
        cy.contains('Lue lisää').should('be.visible')
        cy.screenshot('img')
        cy.contains('Lue lisää').click()
    })
    })