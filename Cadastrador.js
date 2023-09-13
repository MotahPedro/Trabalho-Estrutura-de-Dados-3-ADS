class Aluno {
    constructor(nome, ra, idade, nota, sexo, media, resultado) {
        this.nome = nome
        this.ra = ra
        this.idade = idade
        this.nota = nota
        this.sexo = sexo
        this.media = media
        this.resultado = resultado
    }
}

const alunos = []
const output = document.getElementById("output")

function cadastrarAluno() {
    const nome = prompt("Digite o nome do aluno: ")
    const ra = prompt("Digite o RA do aluno: ")
    const idade = parseInt(prompt("Digite a idade do aluno: "))
    const nota = parseFloat(prompt("Digite a nota do aluno: "))
    const sexo = prompt("Digite o sexo do aluno: ")
    const media = parseFloat(prompt("Digite a média do aluno: "))
    const resultado = prompt("Digite o resultado do aluno: ")

    const aluno = new Aluno(nome, ra, idade, nota, sexo, media, resultado)
    alunos.push(aluno)
}

function renderAlunos(alunosArray) {
    const tbody = document.getElementById("output")
    tbody.innerHTML = "" // Limpa a tabela antes de adicionar os novos dados

    for (const aluno of alunosArray) {
        const row = document.createElement("tr")

        const nomeCell = document.createElement("td")
        nomeCell.textContent = aluno.nome
        row.appendChild(nomeCell)

        const raCell = document.createElement("td")
        raCell.textContent = aluno.ra
        row.appendChild(raCell)

        const idadeCell = document.createElement("td")
        idadeCell.textContent = aluno.idade
        row.appendChild(idadeCell)

        const notaCell = document.createElement("td")
        notaCell.textContent = aluno.nota
        row.appendChild(notaCell)

        const sexoCell = document.createElement("td")
        sexoCell.textContent = aluno.sexo
        row.appendChild(sexoCell)

        const mediaCell = document.createElement("td")
        mediaCell.textContent = aluno.media
        row.appendChild(mediaCell)

        const resultadoCell = document.createElement("td")
        resultadoCell.textContent = aluno.resultado
        row.appendChild(resultadoCell)

        tbody.appendChild(row)
    }
}