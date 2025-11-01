/// <reference types="cypress" />

describe('POST /jogadores', () => {
    let postCadastrarJogador;

    before(() => {
        cy.fixture('postCadastrarJogador').then((data) => {
            postCadastrarJogador = data;
        });
    });

    it('Deve retornar 201 quando cadastrar Jogador com sucesso', function () {
        cy.obterTokenAdmin().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/jogadores',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: postCadastrarJogador.jogador1,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(201);
            });
        });
    });

    it('Deve retornar 401 quando não for autorizado o cadastro de jogadores', function () {
        cy.obterTokenAdmin().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/jogadores',
                headers: {
                    'Content-Type': 'application/json'
                    //Authorization: `Bearer ${token}`
                },
                body: postCadastrarJogador.jogador1,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(401);
            });
        });

        it('Deve retornar 403 quando não for autorizado o cadastro de jogadores por Executivos', function () {
            cy.obterTokenExecutivo().then((token) => {
                cy.request({
                    method: 'POST',
                    url: 'http://localhost:3000/jogadores',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: postCadastrarJogador.jogador1,
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.eq(403);
                });
            });
        })
    })
});