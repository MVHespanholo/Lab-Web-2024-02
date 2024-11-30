const listaAlunos = [];

const getAlunos = async (request, h) => {

    const {query} = request;

    let resultado;
    if(query.nome && query.idade) {
        resultado = listaAlunos
        .filter(aluno => aluno.nome == query.nome && aluno.idade == query.idade);
    } else {
        return listaAlunos;
    }

    return resultado;
}

const alunoPorId = async (request, h) => {

    const idAluno = request.params.id;
    
    const alunoProcurado = listaAlunos.find(aluno => aluno.id == idAluno);
    if(alunoProcurado) {
        return h.response(alunoProcurado).code(200);
    } 

    return h.response().code(404);
}

const createAluno = async (request, h) => {
    //save in memory
    request.payload.id = Math.floor((Math.random() * 1000));
    listaAlunos.push(request.payload);
    return h.response(request.payload).code(201);
}

module.exports = {getAlunos, createAluno, alunoPorId};
