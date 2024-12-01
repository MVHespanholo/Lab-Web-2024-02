const Hapi = require("@hapi/hapi");
const routes = require("./config/routes");
const config = require('./config/envs-config');
const { sequelize } = require('./config/db');

const server = Hapi.server({
    port: config.port,
    host: config.host
});

routes.forEach((path) => server.route(path));

// Adicione isto para sincronizar o banco de dados
server.ext('onPreStart', async (server) => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco estabelecida com sucesso.');
        // Use force: true apenas em desenvolvimento/testes
        await sequelize.sync({ force: false });
        console.log('Modelos sincronizados com o banco de dados.');
    } catch (err) {
        console.error('Erro ao conectar com o banco:', err);
        throw err;
    }
});

module.exports = server;