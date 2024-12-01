const produtoController = require("./produto-controller");
const produtoSchema = require("./produto-schema");

const baseVersion = '/v1';

const routes = [
    {
        method: "POST",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.createProduto,
            validate: produtoSchema.createProduto,
            tags: ['api', 'produtos'],
            description: 'Criar novo produto',
            notes: 'Cria um novo produto no sistema',
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '201': {
                            description: 'Produto criado com sucesso'
                        },
                        '500': {
                            description: 'Erro interno'
                        }
                    }
                }
            }
        }
    },
    {
        method: "PUT",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.updateProduto,
            validate: produtoSchema.updateProduto,
            tags: ['api', 'produtos'],
            description: 'Atualizar produto existente',
            notes: 'Atualiza um produto existente pelo ID',
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            description: 'Produto atualizado com sucesso'
                        },
                        '404': {
                            description: 'Produto não encontrado'
                        },
                        '500': {
                            description: 'Erro interno'
                        }
                    }
                }
            }
        }
    },
    {
        method: "DELETE",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.deleteProduto,
            tags: ['api', 'produtos'],
            description: 'Deletar produto',
            notes: 'Remove um produto pelo ID',
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '204': {
                            description: 'Produto deletado com sucesso'
                        },
                        '404': {
                            description: 'Produto não encontrado'
                        },
                        '500': {
                            description: 'Erro interno'
                        }
                    }
                }
            }
        }
    },
    {
        method: "GET",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.getProdutoById,
            tags: ['api', 'produtos'],
            description: 'Buscar produto por ID',
            notes: 'Retorna um produto específico pelo ID',
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            description: 'Produto encontrado'
                        },
                        '404': {
                            description: 'Produto não encontrado'
                        },
                        '500': {
                            description: 'Erro interno'
                        }
                    }
                }
            }
        }
    },
    {
        method: "GET",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.getProdutos,
            tags: ['api', 'produtos'],
            description: 'Listar produtos',
            notes: 'Retorna lista de produtos com filtros opcionais',
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            description: 'Lista de produtos'
                        },
                        '500': {
                            description: 'Erro interno'
                        }
                    }
                }
            }
        }
    }
];

module.exports = routes;