CREATE TABLE produtos (
    cod_produto SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    categoria VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    preco FLOAT NOT NULL,
    quantidade_estoque INTEGER NOT NULL,
    codigo_barras VARCHAR(100) NOT NULL,
    dimensoes JSONB,
    peso JSONB,
    status VARCHAR(50) NOT NULL DEFAULT 'ATIVO',
    data_cadastro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);