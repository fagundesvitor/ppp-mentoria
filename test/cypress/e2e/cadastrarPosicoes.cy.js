describe('POST /posicoes', () => {
    it('Deve retornar 201 quando a posição Falso 9 for cadastrada com sucesso', function () {
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
});