/// <reference types="cypress" />

describe('POST /caracteristicas', () => {
    it('Deve retornar 201 quando a posição Falso 9 for cadastrada com sucesso', () => {
        cy.obterTokenAdmin().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/caracteristicas',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: {
                    nome: "Inteligente",
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(201);
            });
        });
    });


    it('Deve retornar 400 quando dados obrigatórios estiverem ausentes', function () {
        cy.obterTokenAdmin().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/caracteristicas',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: {
                    // nome ausente
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
            });
        });
    });

    it('Deve retornar 401 quando o acesso não for autorizado', function () {
        cy.obterTokenAdmin().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/caracteristicas',
                headers: {
                    'Content-Type': 'application/json',
                    //Authorization: `Bearer ${token}`
                },
                body: {
                    nome: "Ofensivo",
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(401);
            });
        });
    });

    it('Deve retornar 403 quando o acesso for negado para Executivo', function () {
        cy.obterTokenExecutivo().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/caracteristicas',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: {
                    nome: "Ofensivo",
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(403);
            });
        });
    });

    it('Deve retornar 409 quando característica já estiver cadastrada', function () {
        cy.obterTokenAdmin().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/caracteristicas',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: {
                    nome: "Inteligente",
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(409);
            });
        });
    });
});
