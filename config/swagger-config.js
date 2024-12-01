const swaggerOptions = {
    info: {
        title: 'API de Produtos e Alunos',
        version: '1.0.0',
        description: 'API para gerenciamento de produtos'
    },
    basePath: '/v1',
    tags: [
        {
            name: 'produtos',
            description: 'Operações relacionadas a produtos'
        }
    ]
};

module.exports = swaggerOptions;