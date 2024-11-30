const Joi = require("joi");

const createProduto = {
    payload: Joi.object({
        id: Joi.string().required(),
        nome: Joi
                .string()
                .min(2)
                .required(),
        descricao: Joi
                    .string()
                    .allow(''),
        categoria: Joi
                    .string()
                    .required(),
        marca: Joi
                .string()
                .required(),
        preco: Joi
                .number()
                .positive()
                .required(),
        quantidadeEstoque: Joi
                            .number()
                            .integer()
                            .min(0)
                            .required(),
        codigoBarras: Joi
                        .string()
                        .required(),
        dimensoes: Joi.object({
            altura: Joi
                    .number()
                    .required(),
            largura: Joi
                    .number()
                    .required(),
            profundidade: Joi
                            .number()
                            .required(),
            unidadeMedida: Joi
                           .string()
                           .valid('cm', 'm', 'mm')
                           .required()
        }).required(),
        peso: Joi.object({
            valor: Joi
                    .number()
                    .positive()
                    .required(),
            unidadeMedida: Joi
                            .string()
                            .valid('kg', 'g')
                            .required()
        }).required(),
        status: Joi
                .string()
                .valid('ativo', 'inativo')
                .required(),
        dataCadastro: Joi
                        .date()
                        .iso()
                        .required()
    })
};

const updateProduto = {
    payload: Joi.object({
        nome: Joi
                .string()
                .min(2),
        descricao: Joi
                    .string()
                    .allow(''),
        categoria: Joi.string(),
        marca: Joi.string(),
        preco: Joi
                .number()
                .positive(),
        quantidadeEstoque: Joi
                            .number()
                            .integer()
                            .min(0),
        codigoBarras: Joi.string(),
        dimensoes: Joi.object({
            altura: Joi.number(),
            largura: Joi.number(),
            profundidade: Joi.number(),
            unidadeMedida: Joi
                            .string()
                            .valid('cm', 'm', 'mm')
        }),
        peso: Joi.object({
            valor: Joi
                    .number()
                    .positive(),
            unidadeMedida: Joi
                            .string()
                            .valid('kg', 'g')
        }),
        status: Joi
                .string()
                .valid('ativo', 'inativo'),
        dataCadastro: Joi
                        .date()
                        .iso()
    }).min(1) // Pelo menos um campo deve ser atualizado
};

module.exports = {
    createProduto,
    updateProduto
};