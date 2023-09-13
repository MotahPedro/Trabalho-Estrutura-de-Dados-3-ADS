function relatorioDecrescenteRa() {
    const alunosOrdenados = alunos.slice().sort((a, b) => b.ra.localeCompare(a.ra))
    renderAlunos(alunosOrdenados)
}