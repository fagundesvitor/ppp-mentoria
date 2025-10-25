1. Objetivo:
- Criar uma API Rest para busca de jogadores de futebol. Quem vai pesquisar os jogadores são os executivos de futebol dos clubes.

2. Contexto:
- A API possui as seguintes funcionalidades: registro de admin, registro de executivo, registro de jogadores, registro de características (o jogador pode ter mais de uma característica), registro de posição do jogador (o atleta pode ter mais de uma posição).
- Para que eu possa usar as funcionalidades, preciso fazer login como admin.
- Para que o executivo possa consultar jogadores, ele precisa fazer login como executivo.
- Executivos apenas consultam jogadores, admins acessam todas funcionalidades do sistema.
- Não há remoção/arquivamento de jogadores.
- Os jogadores devem ter: Id, Nome completo, Apelido, Data de nascimento, Data de início do contrato no clube, Data de fim do contrato no clube, Valor da multa rescisória, Clube atual.
- Algumas características dos jogadores: ofensivo, defensivo, rápido, lento, pesado, bom de bola aérea, boa visão de jogo
- O executivo pode pesquisar pelos campos do jogador.

3. Regras:
- Não me pergunte nada, só faça.
- A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API.
- Adicione um endpoint para renderizar o Swagger.
- Construa um arquivo README para descrever o projeto
- Divida a API em camadas: routes, controllers, service e model
- Armazene os dados da API em um banco de dados em memória
- Utilize a biblioteca express para construir a API Rest
- Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto.
