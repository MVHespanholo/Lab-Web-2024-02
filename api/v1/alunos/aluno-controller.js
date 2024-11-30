const listaAlunos = [];

const alunoBusiness =  require("./aluno-business");

const getAlunos = async (request, h) => {

    const result = await  alunoBusiness.list(request.query);
    
    return result;
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
    const result = await alunoBusiness.save(request.payload);

    return h.response(request.payload).code(201);
}

module.exports = {getAlunos, createAluno, alunoPorId};
