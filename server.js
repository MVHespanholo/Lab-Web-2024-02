const Hapi = require("@hapi/hapi");
const routes = require("./config/routes");
const config = require('./config/envs-config');
const { sequelize } = require('./config/db');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const swaggerOptions = require('./config/swagger-config');

const server = Hapi.server({
    port: config.port,
    host: config.host
});

const init = async () => {
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    routes.forEach((path) => server.route(path));

    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco estabelecida com sucesso.');
        await sequelize.sync({ force: false });
        console.log('Modelos sincronizados com o banco de dados.');
    } catch (err) {
        console.error('Erro ao conectar com o banco:', err);
        throw err;
    }

    return server;
};

module.exports = { server, init };