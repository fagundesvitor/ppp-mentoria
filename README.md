# API Buscar Jogadores de Futebol

## Objetivo
API Rest para busca de jogadores de futebol, voltada para Executivos de clubes.

## Funcionalidades
- Registro de admin
- Registro de executivo
- Registro de jogadores
- Registro de características (jogador pode ter várias)
- Registro de posição do jogador (jogador pode ter várias)
- Login como admin para acessar todas funcionalidades
- Login como executivo para consultar jogadores
- Consulta de jogadores por campos
- Autenticação via Bearer token (JWT)

## Estrutura do Projeto
- `routes/` - Rotas da API
- `controllers/` - Lógica das rotas
- `service/` - Serviços, banco de dados em memória e middleware de autenticação
- `model/` - Modelos de dados
- `resources/` - Documentação Swagger

## Banco de Dados
- Utiliza armazenamento em memória (não persiste dados após reiniciar o servidor)

## Autenticação
Middleware de autenticação via Bearer token (JWT).
- Admins têm acesso total
- Executivos podem apenas consultar jogadores

## Documentação
Documentação Swagger disponível em `resources/swagger.json`.
Endpoint para visualização: [`/api-docs`](http://localhost:3000/api-docs)

## Como executar
1. Instale as dependências:
    ```bash
    npm install
    ```
2. Inicie o servidor:
    ```bash
    npm start
    ```
3. Acesse a documentação Swagger em [`http://localhost:3000/api-docs`](http://localhost:3000/api-docs)

## Endpoints principais
Consulte o arquivo `resources/swagger.yaml` para detalhes dos endpoints e modelos de dados.

## Observações
- Este projeto é apenas para fins de demonstração e não deve ser usado em produção sem persistência de dados e segurança adequada.

---

## 🧪 Testes Automatizados Funcionais

Os testes automatizados funcionais garantem que as principais funcionalidades da API estejam funcionando corretamente, simulando o uso real do sistema.

- **Ferramenta utilizada:** [Cypress](https://www.cypress.io/) 🚦
- **Localização dos testes:** Os testes estão localizados na pasta `cypress/` do projeto.
- **Como executar os testes:**
    1. Certifique-se de que as dependências estão instaladas (`npm install`).
    2. Execute o comando abaixo na raiz do projeto:
        ```bash
        npm test
        ```
    3. O Cypress irá rodar todos os testes automatizados e exibir o resultado no terminal.

Esses testes cobrem cenários como:
- Cadastro e autenticação de usuários (admin e executivo)
- Cadastro e consulta de jogadores
- Validação das regras de negócio e autenticação

---

## 🚀 Testes de Performance

Os testes de performance avaliam como a API se comporta sob carga, simulando múltiplos acessos simultâneos.

- **Ferramenta utilizada:** [k6](https://k6.io/) 📈
- **Localização dos testes:** Os scripts de teste estão na pasta `test/performance/`.
- **Como executar um teste de performance:**
    1. Instale o [k6](https://k6.io/docs/getting-started/installation/) em sua máquina.
    2. Execute o comando abaixo na raiz do projeto, substituindo `nome-do-arquivo` pelo nome do arquivo desejado:
        ```bash
        k6 run test/performance/[nome-do-arquivo].test.js
        ```
    3. O k6 irá simular múltiplos usuários acessando a API e gerar um relatório detalhado no terminal.

Esses testes ajudam a identificar gargalos, limites e pontos de melhoria na performance da API.

---

## 📚 Referências

- [Documentação Cypress](https://docs.cypress.io/)
- [Documentação k6](https://k6.io/docs/)