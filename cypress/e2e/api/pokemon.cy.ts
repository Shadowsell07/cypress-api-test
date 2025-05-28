/// <reference types="cypress" />

describe.only('Pokémon API Tests', () => {
    const baseUrl = 'https://pokeapi.co/api/v2';

    it('should fetch a list of Pokémon', () => {
        cy.request(`${baseUrl}/pokemon`)
            .its('status')
            .should('equal', 200);
    });
    
    it('should fetch a specific Pokémon by ID', () => {
        const pokemonId = 1; // Bulbasaur
        cy.request(`${baseUrl}/pokemon/${pokemonId}`)
            .its('body')
            .should('have.property', 'name', 'bulbasaur');
    });

    it('should return 404 for a non-existent Pokémon', () => {
        const nonExistentId = 9999;
        cy.request({
            url: `${baseUrl}/pokemon/${nonExistentId}`,
            failOnStatusCode: false
        }).its('status').should('equal', 404);
    });

    it('should fetch Pokémon abilities', () => {
        const abilityId = 1; // Overgrow
        cy.request(`${baseUrl}/ability/${abilityId}`)
            .its('body')
            .should('have.property', 'name', 'overgrow');
    });
});