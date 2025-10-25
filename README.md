# PPP Mentoria API

## Objetivo
API Rest para busca de jogadores de futebol, voltada para executivos de clubes.

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
- `recursos/` - Documentação Swagger

## Banco de Dados
- Utiliza armazenamento em memória para admins, executivos, jogadores, características e posições.

## Autenticação
- Middleware de autenticação via Bearer token (JWT)
- Admins têm acesso total
- Executivos podem apenas consultar jogadores

## Documentação
- Documentação Swagger disponível em `recursos/swagger.json`
- Endpoint para visualização: `/api-docs`

## Como executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```
   (ou use `node index.js` diretamente)
3. Acesse a documentação Swagger em `http://localhost:3000/api-docs`

## Observações
- Não há remoção/arquivamento de jogadores.
- Características disponíveis: ofensivo, defensivo, rápido, lento, pesado, bom de bola aérea, boa visão de jogo.

---

Desenvolvido para mentoria PPP.
