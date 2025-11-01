/// <reference types="cypress" />

describe('POST /jogadores', () => {
    it('Deve retornar 201 quando cadastrar Jogador com sucesso', function () {
        cy.obterTokenAdmin().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/jogadores',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: {
                    "nomeCompleto": "Anderson Silva",
                    "apelido": "Anderson Silva",
                    "dataNascimento": "1987-10-26",
                    "inicioContrato": "2024-01-01",
                    "fimContrato": "2027-12-31",
                    "multaRescisoria": 30.000,
                    "clubeAtual": "Ibis",
                    "caracteristicas": [
                        "Ofensivo",
                        "Rápido"
                    ],
                    "posicoes": [
                        "Volante"
                    ]
                },
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
                body: {
                    "nomeCompleto": "Anderson Silva",
                    "apelido": "Anderson Silva",
                    "dataNascimento": "1987-10-26",
                    "inicioContrato": "2024-01-01",
                    "fimContrato": "2027-12-31",
                    "multaRescisoria": 30.000,
                    "clubeAtual": "Ibis",
                    "caracteristicas": [
                        "Ofensivo",
                        "Rápido"
                    ],
                    "posicoes": [
                        "Volante"
                    ]
                },
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
                    body: {
                        "nomeCompleto": "Anderson Silva",
                        "apelido": "Anderson Silva",
                        "dataNascimento": "1987-10-26",
                        "inicioContrato": "2024-01-01",
                        "fimContrato": "2027-12-31",
                        "multaRescisoria": 30.000,
                        "clubeAtual": "Ibis",
                        "caracteristicas": [
                            "Ofensivo",
                            "Rápido"
                        ],
                        "posicoes": [
                            "Volante"
                        ],
                    },
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.eq(403);
                });
            });
        })
    })
});