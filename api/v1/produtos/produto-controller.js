const { Op } = require('sequelize');
const { Produto } = require('./produto-model');

const createProduto = async (request, h) => {
    try {
        const produto = await Produto.create(request.payload);
        return h.response(produto).code(201);
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        return h.response({ 
            message: 'Erro ao criar produto',
            error: error.message 
        }).code(500);
    }
};

const updateProduto = async (request, h) => {
    try {
        const [updated] = await Produto.update(request.payload, {
            where: { cod_produto: request.params.id }
        });

        if (updated) {
            const updatedProduto = await Produto.findByPk(request.params.id);
            return h.response(updatedProduto).code(200);
        }

        return h.response({ message: 'Produto não encontrado' }).code(404);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        return h.response({ 
            message: 'Erro ao atualizar produto',
            error: error.message 
        }).code(500);
    }
};

const deleteProduto = async (request, h) => {
    try {
        const deleted = await Produto.destroy({
            where: { cod_produto: request.params.id }
        });

        if (deleted) {
            return h.response({ message: 'Produto deletado com sucesso' }).code(204);
        }

        return h.response({ message: 'Produto não encontrado' }).code(404);
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        return h.response({ 
            message: 'Erro ao deletar produto',
            error: error.message 
        }).code(500);
    }
};

const getProdutoById = async (request, h) => {
    try {
        const produto = await Produto.findByPk(request.params.id);
        
        if (produto) {
            return h.response(produto).code(200);
        }

        return h.response({ message: 'Produto não encontrado' }).code(404);
    } catch (error) {
        console.error('Erro ao buscar produto:', error);
        return h.response({ 
            message: 'Erro ao buscar produto',
            error: error.message 
        }).code(500);
    }
};

const getProdutos = async (request, h) => {
    try {
        const { categoria, nome, status } = request.query;
        const where = {};

        if (categoria) {
            where.categoria = categoria;
        }

        if (nome) {
            where.nome = { [Op.iLike]: `%${nome}%` };
        }

        if (status) {
            where.status = status;
        }

        const produtos = await Produto.findAll({ 
            where,
            order: [['nome', 'ASC']]
        });

        return h.response(produtos).code(200);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return h.response({ 
            message: 'Erro ao buscar produtos',
            error: error.message 
        }).code(500);
    }
};

module.exports = {
    createProduto,
    updateProduto,
    deleteProduto,
    getProdutoById,
    getProdutos
};