# Web2024-2

## Descrição

Este é um projeto básico em Node.js utilizando o framework Hapi.js para gerenciamento de rotas e o Joi para validação de dados, construido na disciplina de Laboratório Web da Fatec Franca.

Apresenta estrutura base para desenvolvimento de apis.

## Requisitos

- Node.js (versão recomendada: 14.x ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório em sua máquina local:
   ```bash
   git clone git@github.com:fabiomedeirosf/lab-web-2024-2.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd web2024-2
   ```
3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Scripts de Inicialização

- **Iniciar em Produção:**
  Para rodar o projeto no modo de produção, execute o comando:
  ```bash
  npm start
  ```
  Isso executará o arquivo `index.js` com o comando `node index.js`.

- **Modo de Desenvolvimento:**
  Para rodar o projeto com recarga automática no modo de desenvolvimento, use:
  ```bash
  npm run dev
  ```
  Este comando utiliza o flag `--watch` do Node.js para reiniciar automaticamente o servidor sempre que houver alterações no código.

- **Testes:**
- [ ] Implementar testes automatizados para endpoints principais

## Dependências Principais

- **@hapi/hapi**: Framework web para construir servidores e APIs.
- **joi**: Biblioteca para validação de dados no Node.js.

## Licença

Este projeto está sob a licença ISC.