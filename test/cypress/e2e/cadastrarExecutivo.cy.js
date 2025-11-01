/// <reference types="cypress" />

describe('POST /executivo', () => {
    it('Deve retornar 201 quando cadastrar Executivo com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/executivo',
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "nome": "Denis Matos",
                "email": "denis@email.com",
                "senha": "123",
                "clube": "Clube D"
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('Deve retornar 400 quando dados obrigatórios estiverem ausentes', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/executivo',
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "nome": "Denis Matos",
                "email": "denis@email.com",
                // senha ausente
                "clube": "Clube D"
            },
        }).then((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it('Deve retornar 409 quando Executivo cadastrado já existir', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/executivo',
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "nome": "Vitor Fagundes",
                "email": "vitor@email.com",
                "senha": "123",
                "clube": "Clube A"
            }
        }).then((response) => {
            expect(response.status).to.eq(409);
        });
    });
});