const Sequelize = require('sequelize');

const sequelizeConfig = {
    dialect: 'postgress',
    port: 5432,
    host: 'localhost',
    logging: console.log
};

const sequelize = new Sequelize('database', 'username', 'password', sequelizeConfig);