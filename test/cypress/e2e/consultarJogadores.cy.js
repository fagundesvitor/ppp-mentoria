/// <reference types="cypress" />

describe('GET /jogadores', () => {
    it('Deve retornar 200 quando consultar jogadores com sucesso', function () {
        cy.obterTokenExecutivo().then((token) => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/jogadores',
                qs: {
                    nomeCompleto: 'João da Silva',
                    clubeAtual: 'Clube B',
                    apelido: 'da Silva'
                },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });

    it('Deve retornar 200 quando consultar jogadores com sucesso sem filtrar', function () {
        cy.obterTokenExecutivo().then((token) => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/jogadores',
                /*  qs: {
                      nomeCompleto: 'João da Silva',
                      clubeAtual: 'Clube B',
                      apelido: 'da Silva'
                  }, */
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });

    it('Deve retornar 200 quando consultar jogadores com sucesso filtrando pelo nome completo', function () {
        cy.obterTokenExecutivo().then((token) => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/jogadores',
                  qs: {
                      nomeCompleto: 'João da Silva'
                  }, 
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });

    it('Deve retornar 401 quando o acesso não for autorizado', function () {
        cy.obterTokenExecutivo().then((token) => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/jogadores',
                qs: {
                    nomeCompleto: 'João da Silva',
                    clubeAtual: 'Clube B',
                    apelido: 'da Silva'
                },
                headers: {
                    'Content-Type': 'application/json',
                    //Authorization: `Bearer ${token}`
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(401);
            });
        });
    });


    it('Deve retornar 403 quando o acesso for negado para o papel Admin', function () {
        cy.obterTokenAdmin().then((token) => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/jogadores',
                qs: {
                    nomeCompleto: 'João da Silva',
                    clubeAtual: 'Clube B',
                    apelido: 'da Silva'
                },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(403);
            });
        });
    });

});