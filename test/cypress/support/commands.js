Cypress.Commands.add('obterTokenAdmin', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            email: 'julio@email.com',
            senha: '123'
        },
        failOnStatusCode: false
    }).then((response) => {
        return response.body.token;
    });
});

Cypress.Commands.add('obterTokenExecutivo', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            'email': 'vitor@email.com',
            'senha': '123'
        },
        failOnStatusCode: false
    }).then((response) => {
        return response.body.token;
    });
});
