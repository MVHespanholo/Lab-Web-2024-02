const alunoController = require("./aluno-controller");
const alunoSchema = require("./aluno-schema");

const routes = [
    {
        method: "GET",
        path: "/ping",
        handler: (request, h) => {
            return "pong";
        }
    },
    {
        method: "GET",
        path: "/alunos",
        options: {
            handler: alunoController.getAlunos,
            validate: alunoSchema.consultarAlunos
        }
    },
    {
        method: "GET",
        path: "/alunos/{id}",
        options: {
            handler: alunoController.alunoPorId,
            validate: alunoSchema.consultaPorId
        }
    },
    {
        method: "POST",
        path: "/alunos",
        options: {
            handler: alunoController.createAluno,
            validate: alunoSchema.createAluno
        }
    }
];

module.exports = routes;