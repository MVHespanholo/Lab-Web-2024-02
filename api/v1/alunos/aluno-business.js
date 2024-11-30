const listaAlunos = [];

const save = async (params) => {
    params.id = Math.floor(Math.random() * 1000);

    listaAlunos.push(params);

    return params;
}

const list = async(filters) => {
    let resultado;
    if(filters.nome && filters.idade) {
        resultado = listaAlunos
        .filter(aluno => aluno.nome == filters.nome && aluno.idade == filters.idade);
    } else {
        return listaAlunos;
    }

    return resultado;
}

module.exports = {save, list};