const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantidadeEstoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    codigoBarras: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dimensoes: {
        type: DataTypes.JSON,
        allowNull: true
    },
    peso: {
        type: DataTypes.JSON,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataCadastro: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'produtos',
    timestamps: false
});

module.exports = Produto;