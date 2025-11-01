/// <reference types="cypress" />

describe('POST /login', () => {
    it('Deve retornar 200 quando Admin logar com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            headers: { 'Content-Type': 'application/json' },
            body: {
                email: 'julio@email.com',
                senha: '123'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.token).to.be.a('string');
        });
    });

    it('Deve retornar 401 quando informar senha inválida para o Admin', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            headers: { 'Content-Type': 'application/json' },
            body: {
                email: 'julio@email.com',
                senha: 'senha_errada'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.message).to.eq("Credenciais inválidas.");
        });
    });

    it('Deve retornar 200 quando Executivo logar com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            headers: { 'Content-Type': 'application/json' },
            body: {
                email: 'vitor@email.com',
                senha: '123'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.token).to.be.a('string');
        });
    });

    it('Deve retornar 401 quando informar senha inválida para o Executivo', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            headers: { 'Content-Type': 'application/json' },
            body: {
                email: 'vitor@email.com',
                senha: 'senha_errada'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.message).to.eq("Credenciais inválidas.");
        });
    });
});