class Aluno {
    constructor(nome, ra, idade, nota, sexo, media, resultado) {
        this.nome = nome;
        this.ra = ra;
        this.idade = idade;
        this.nota = nota;
        this.sexo = sexo;
        this.media = media;
        this.resultado = resultado;
    }
}

const alunos = []
const output = document.getElementById("output")

function cadastrarAluno() {
    const nome = document.getElementById("nome").value;
    const ra = document.getElementById("ra").value;
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const media = parseFloat(document.getElementById("media").value);
    const resultado = document.getElementById("resultado").value;

    const aluno = new Aluno(nome, ra, idade, sexo, media, resultado);
    alunos.push(aluno);
    renderAlunos(alunos);

    // Limpa o formulário e o oculta
    document.getElementById("alunoForm").reset();
    document.getElementById("alunoForm").style.display = "none";
    
    // Resetar o menu de seleção
    document.getElementById("selecao").value = "escolha";
}

function renderAlunos(alunosArray) {
    const tbody = document.getElementById("output")
    tbody.innerHTML = "" // Limpa a tabela antes de adicionar os novos dados

    for (const aluno of alunosArray) {
        const row = document.createElement("tr")

        const nomeCell = document.createElement("td")
        nomeCell.textContent = aluno.nome;
        row.appendChild(nomeCell);

        const raCell = document.createElement("td")
        raCell.textContent = aluno.ra;
        row.appendChild(raCell);

        const idadeCell = document.createElement("td")
        idadeCell.textContent = aluno.idade;
        row.appendChild(idadeCell);

        const notaCell = document.createElement("td")
        notaCell.textContent = aluno.nota;
        row.appendChild(notaCell);

        const sexoCell = document.createElement("td")
        sexoCell.textContent = aluno.sexo;
        row.appendChild(sexoCell);

        const mediaCell = document.createElement("td")
        mediaCell.textContent = aluno.media;
        row.appendChild(mediaCell);

        const resultadoCell = document.createElement("td")
        resultadoCell.textContent = aluno.resultado;
        row.appendChild(resultadoCell);

        tbody.appendChild(row);
    }
}