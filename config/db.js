const Sequelize = require('sequelize');
const config = require('./envs-config');

const sequelize = new Sequelize(
    'banco_teste',
    'postgres',
    '1241',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5434,
        logging: console.log
    }
);

module.exports = { sequelize };