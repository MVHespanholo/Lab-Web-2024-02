const Produto = require('./produto-model');

const createProduto = async (request, h) => {

    const produto = await Produto.create(request.payload);

    return h.response(produto).code(201);
};

const updateProduto = async (request, h) => {

    const [updated] = await Produto.update(request.payload, {

        where: { id: request.params.id }

    });
    
    if (updated) {

        const updatedProduto = await Produto.findByPk(request.params.id);

        return h.response(updatedProduto).code(200);
    }
    
    return h.response().code(404);

};

const deleteProduto = async (request, h) => {

    const deleted = await Produto.destroy({

        where: { id: request.params.id }

    });
    
    if (deleted) {

        return h.response().code(204);

    }
    
    return h.response().code(404);

};

const getProdutoById = async (request, h) => {

    const produto = await Produto.findByPk(request.params.id);
    
    if (produto) {

        return h.response(produto).code(200);

    }
    
    return h.response().code(404);
};

const getProdutos = async (request, h) => {

    const { categoria, nome } = request.query;
    
    const where = {};
    
    if (categoria) {

        where.categoria = categoria;

    }
    if (nome) {

        where.nome = { [Op.like]: `%${nome}%` }; // Usando operador LIKE para busca por nome
    }
    
    const produtos = await Produto.findAll({ where });

    return h.response(produtos).code(200);
};

module.exports = {
    createProduto,
    updateProduto,
    deleteProduto,
    getProdutoById,
    getProdutos
};