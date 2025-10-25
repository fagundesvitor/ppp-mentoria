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