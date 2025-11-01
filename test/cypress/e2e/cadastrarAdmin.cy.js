/// <reference types="cypress" />

describe('POST /admin', () => {
    it('Deve retornar 201 quando cadastrar Admin com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/admin',
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "nome": "Emerson Silva",
                "email": "emerson@email.com",
                "senha": "123"
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('Deve retornar 400 quando dados obrigatórios estiverem ausentes', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/admin',
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "nome": "Emerson Silva",
                "email": "emerson@email.com",
            }
        }).then((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it('Deve retornar 409 quando Admin já existir', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/admin',
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "nome": "Julio de Lima",
                "email": "julio@email.com",
                "senha": "123"
            }
        }).then((response) => {
            expect(response.status).to.eq(409);
        });
    });
});