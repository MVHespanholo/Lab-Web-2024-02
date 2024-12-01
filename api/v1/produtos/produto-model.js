const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Produto = database.sequelize.define('Produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'cod_produto'
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nome'
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
        field: 'descricao'
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'categoria'
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'marca'
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'preco'
    },
    quantidadeEstoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'quantidade_estoque'
    },
    codigoBarras: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'codigo_barras'
    },
    dimensoes: {
        type: Sequelize.JSON,
        allowNull: true,
        field: 'dimensoes'
    },
    peso: {
        type: Sequelize.JSON,
        allowNull: true,
        field: 'peso'
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'ATIVO',
        field: 'status'
    },
    dataCadastro: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field: 'data_cadastro'
    }
}, {
    tableName: 'produtos',
    timestamps: false
});

module.exports = { Produto };