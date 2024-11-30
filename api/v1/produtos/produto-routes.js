const { createProduto, updateProduto, deleteProduto, getProdutoById, getProdutos } = require('./produto-controller');
const { createProduto: createProdutoSchema, updateProduto: updateProdutoSchema } = require('./produto-schema');

const produtoRoutes = [
    {
        method: 'POST',
        path: '/produtos',
        handler: createProduto,
        options: {
            validate: createProdutoSchema
        }
    },
    {
        method: 'PUT',
        path: '/produtos/{id}',
        handler: updateProduto,
        options: {
            validate: updateProdutoSchema
        }
    },
    {
        method: 'DELETE',
        path: '/produtos/{id}',
        handler: deleteProduto
    },
    {
        method: 'GET',
        path: '/produtos/{id}',
        handler: getProdutoById
    },
    {
        method: 'GET',
        path: '/produtos',
        handler: getProdutos
    }
];

module.exports = produtoRoutes;