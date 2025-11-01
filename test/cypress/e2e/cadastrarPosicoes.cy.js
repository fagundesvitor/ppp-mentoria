describe('POST /posicoes', () => {
    it(`Deve retornar 201 quando a posição 'Falso 9' for cadastrada com sucesso`, function () {
        cy.obterTokenAdmin().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/posicoes',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: {
                    nome: "Falso 9"
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(201);
            });
        });
    });

    it(`Deve retornar 400 quando o nome não for informado`, function () {
        cy.obterTokenAdmin().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/posicoes',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
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

    it(`Deve retornar 401 quando o acesso não for autorizado`, function () {
        cy.obterTokenAdmin().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/posicoes',
                headers: {
                    //Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: {
                    // nome ausente
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(401);
            });
        });
    });

        it(`Deve retornar 403 quando o acesso não for autorizado para o Executivo`, function () {
        cy.obterTokenExecutivo().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/posicoes',
                headers: {
                     Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: {
                    // nome ausente
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(403);
            });
        });
    });

        it(`Deve retornar 409 quando a posição já estiver cadastrada`, function () {
        cy.obterTokenAdmin().then((token) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/posicoes',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: {
                    nome: "Falso 9"
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(409);
            });
        });
    });

});