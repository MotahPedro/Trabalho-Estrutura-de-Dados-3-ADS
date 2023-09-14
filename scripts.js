function relatorioDecrescenteRa() {
    const alunosOrdenados = alunos.slice().sort((a, b) => b.ra.localeCompare(a.ra))
    renderAlunos(alunosOrdenados)
}

function relatorioCrescenteNome() {
    const alunosOrdenados = alunos.slice().sort((a, b) => a.nome.localeCompare(b.nome))
    renderAlunos(alunosOrdenados)
}

function relatorioAprovadosCrescenteNome() {
    const aprovados = alunos.filter(aluno => aluno.nota >= 6.0)
    const aprovadosOrdenados = aprovados.slice().sort((a, b) => a.nome.localeCompare(b.nome))
    renderAlunos(aprovadosOrdenados)
}

function selecionarOpcao() {
    var select = document.getElementById("selecao");
    var form = document.getElementById("alunoForm");
    var tabela = document.getElementById("relatorioTabela");

    if (select.value === "nomeCrescente" || select.value === "raDecrescente" || select.value === "aprovadosNomeCrescente") {
        form.style.display = "none";
        tabela.style.display = "block";
        // if (select.value === "nomeCrescente" ) relatorioCrescenteNome()
        // else if (select.value === "raDecrescente" ) relatorioDecrescenteRa()
        // else if (select.value === "aprovadosNomeCrescente") relatorioAprovadosCrescenteNome()
    } else if (select.value === "escolha") {
        form.style.display = "none";
        tabela.style.display = "none";
    } else {
        form.style.display = "block";
        tabela.style.display = "none";
    }
}


function sair(){
    document.getElementById('alunoForm').style.display = 'none';
    // document.getElementById('resultado-lista').style.display = 'none';
    // document.getElementById('ecerrar-programa').style.display = 'block';
}