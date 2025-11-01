/// <reference types="cypress" />

describe('POST /executivo', () => {
    let postCadastrarExecutivo;

    before(() => {
        cy.fixture('postCadastrarExecutivo.json').then((data) => {
            postCadastrarExecutivo = data;
        });
    });

    it('Deve retornar 201 quando cadastrar Executivo com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/executivo',
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json'
            },
            body: postCadastrarExecutivo.sucesso
        }).then((response) => {
            // Se quiser ver o body no log:
            cy.log(JSON.stringify(response.body));
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
            body: postCadastrarExecutivo.dadosObrigatoriosAusentes
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
            body: postCadastrarExecutivo.executivoJaCadastrado
        }).then((response) => {
            expect(response.status).to.eq(409);
        });
    });
});