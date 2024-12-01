const Joi = require("joi");

const createProduto = {
    payload: Joi.object({
        nome: Joi
                .string()
                .min(2)
                .required()
                .messages({
                    'string.base': 'Nome deve ser um texto',
                    'string.empty': 'Nome não pode estar vazio',
                    'string.min': 'Nome deve ter pelo menos 2 caracteres',
                    'any.required': 'Nome é um campo obrigatório'
                }),
        descricao: Joi
                    .string()
                    .allow(''),
        categoria: Joi
                    .string()
                    .required()
                    .messages({
                        'any.required': 'Categoria é um campo obrigatório'
                    }),
        marca: Joi
                .string()
                .required()
                .messages({
                    'any.required': 'Marca é um campo obrigatório'
                }),
        preco: Joi
                .number()
                .positive()
                .required()
                .messages({
                    'number.base': 'Preço deve ser um número',
                    'number.positive': 'Preço deve ser um número positivo',
                    'any.required': 'Preço é um campo obrigatório'
                }),
        quantidadeEstoque: Joi
                            .number()
                            .integer()
                            .min(0)
                            .required()
                            .messages({
                                'number.base': 'Quantidade em estoque deve ser um número',
                                'number.integer': 'Quantidade em estoque deve ser um número inteiro',
                                'number.min': 'Quantidade em estoque não pode ser negativa',
                                'any.required': 'Quantidade em estoque é um campo obrigatório'
                            }),
        codigoBarras: Joi
                        .string()
                        .required()
                        .messages({
                            'any.required': 'Código de barras é um campo obrigatório'
                        }),
        dimensoes: Joi.object({
            altura: Joi
                    .number()
                    .required()
                    .messages({
                        'number.base': 'Altura deve ser um número',
                        'any.required': 'Altura é um campo obrigatório'
                    }),
            largura: Joi
                    .number()
                    .required()
                    .messages({
                        'number.base': 'Largura deve ser um número',
                        'any.required': 'Largura é um campo obrigatório'
                    }),
            profundidade: Joi
                            .number()
                            .required()
                            .messages({
                                'number.base': 'Profundidade deve ser um número',
                                'any.required': 'Profundidade é um campo obrigatório'
                            }),
            unidadeMedida: Joi
                           .string()
                           .valid('cm', 'm', 'mm')
                           .required()
                           .messages({
                               'any.only': 'Unidade de medida deve ser cm, m ou mm',
                               'any.required': 'Unidade de medida é um campo obrigatório'
                           })
        }).required(),
        peso: Joi.object({
            valor: Joi
                    .number()
                    .positive()
                    .required()
                    .messages({
                        'number.base': 'Valor do peso deve ser um número',
                        'number.positive': 'Valor do peso deve ser um número positivo',
                        'any.required': 'Valor do peso é um campo obrigatório'
                    }),
            unidadeMedida: Joi
                            .string()
                            .valid('kg', 'g')
                            .required()
                            .messages({
                                'any.only': 'Unidade de medida deve ser kg ou g',
                                'any.required': 'Unidade de medida é um campo obrigatório'
                            })
        }).required(),
        status: Joi
                .string()
                .valid('ATIVO', 'INATIVO') // Consistência com o modelo
                .required()
                .messages({
                    'any.only': 'Status deve ser ATIVO ou INATIVO',
                    'any.required': 'Status é um campo obrigatório' }),
        dataCadastro: Joi
                        .date()
                        .iso()
                        .required()
                        .messages({
                            'date.base': 'Data de cadastro deve ser uma data válida',
                            'any.required': 'Data de cadastro é um campo obrigatório'
                        })
        })
};

const updateProduto = {
    payload: Joi.object({
        nome: Joi
                .string()
                .min(2)
                .messages({
                    'string.base': 'Nome deve ser um texto',
                    'string.empty': 'Nome não pode estar vazio',
                    'string.min': 'Nome deve ter pelo menos 2 caracteres'
                }),
        descricao: Joi
                    .string()
                    .allow(''),
        categoria: Joi.string(),
        marca: Joi.string(),
        preco: Joi
                .number()
                .positive()
                .messages({
                    'number.base': 'Preço deve ser um número',
                    'number.positive': 'Preço deve ser um número positivo'
                }),
        quantidadeEstoque: Joi
                            .number()
                            .integer()
                            .min(0)
                            .messages({
                                'number.base': 'Quantidade em estoque deve ser um número',
                                'number.integer': 'Quantidade em estoque deve ser um número inteiro',
                                'number.min': 'Quantidade em estoque não pode ser negativa'
                            }),
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
                    .positive()
                    .messages({
                        'number.base': 'Valor do peso deve ser um número',
                        'number.positive': 'Valor do peso deve ser um número positivo'
                    }),
            unidadeMedida: Joi
                            .string()
                            .valid('kg', 'g')
        }),
        status: Joi
                .string()
                .valid('ATIVO', 'INATIVO'),
        dataCadastro: Joi
                        .date()
                        .iso()
    }).min(1) // Pelo menos um campo deve ser atualizado
};

module.exports = {
    createProduto,
    updateProduto
};