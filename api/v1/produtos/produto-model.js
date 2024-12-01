const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Adicionando autoIncrement para o id
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
        allowNull: false,
        validate: {
            isFloat: true, // Validação para garantir que seja um número
            min: 0 // Garantindo que o preço não seja negativo
        }
    },
    quantidadeEstoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0 // Garantindo que a quantidade em estoque não seja negativa
        }
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
        allowNull: false,
        defaultValue: 'ATIVO'
    },
    dataCadastro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'produtos',
    timestamps: false
});

module.exports = Produto;