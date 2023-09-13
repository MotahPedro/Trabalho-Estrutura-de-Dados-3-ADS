function relatorioCrescenteNome() {
    const alunosOrdenados = alunos.slice().sort((a, b) => a.nome.localeCompare(b.nome))
    renderAlunos(alunosOrdenados)
}