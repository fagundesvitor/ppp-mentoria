Cypress.Commands.add('obterTokenAdmin', () => {
    cy.fixture('postLoginAdmin.json').then((postLoginAdmin) => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            headers: {
                'Content-Type': 'application/json'
            },
            body: postLoginAdmin.adminSucesso,
            failOnStatusCode: false
        }).then((response) => {
            return response.body.token;
        });
    });
});

Cypress.Commands.add('obterTokenExecutivo', () => {
    cy.fixture('postLoginExecutivo.json').then((postLoginExecutivo) => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            headers: {
                'Content-Type': 'application/json'
            },
            body: postLoginExecutivo.executivoSucesso,
            failOnStatusCode: false
        }).then((response) => {
            return response.body.token;
        });
    });
});