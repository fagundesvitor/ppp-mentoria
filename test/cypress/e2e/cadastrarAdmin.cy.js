/// <reference types="cypress" />

describe('POST /admin', () => {
    let postCadastrarAdmin;

    before(() => {
        cy.fixture('postCadastrarAdmin.json').then((data) => {
            postCadastrarAdmin = data;
        });
    });

    it('Deve retornar 201 quando cadastrar Admin com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/admin',
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json'
            },
            body: postCadastrarAdmin.sucesso
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
            body: postCadastrarAdmin.dadosObrigatoriosAusentes
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
            body: postCadastrarAdmin.adminJaCadastrado
        }).then((response) => {
            expect(response.status).to.eq(409);
        });
    });
});