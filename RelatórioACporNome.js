function relatorioAprovadosCrescenteNome() {
    const aprovados = alunos.filter(aluno => aluno.nota >= 6.0)
    const aprovadosOrdenados = aprovados.slice().sort((a, b) => a.nome.localeCompare(b.nome))
    renderAlunos(aprovadosOrdenados)
}