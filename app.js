const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./resources/swagger.json');

const app = express();
app.use(express.json());

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas
app.use('/admin', require('./routes/adminRoutes'));
app.use('/executivo', require('./routes/executivoRoutes'));
app.use('/login', require('./routes/authRoutes'));
app.use('/jogadores', require('./routes/jogadorRoutes'));
app.use('/caracteristicas', require('./routes/caracteristicaRoutes'));
app.use('/posicoes', require('./routes/posicaoRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
