// Função que é chamada quando o valor do elemento com o id "selecao" é alterado.
function selecionarOpcao() {
  var select = document.getElementById("selecao");
  var form = document.getElementById("alunoForm");
  var tabela = document.getElementById("relatorioTabela");

  if (
    select.value === "nomeCrescente" ||
    select.value === "raDecrescente" ||
    select.value === "aprovadosNomeCrescente"
  ) {
    form.style.display = "none";
    tabela.style.display = "block";
  } else if (select.value === "escolha") {
    form.style.display = "none";
    tabela.style.display = "none";
  } else {
    form.style.display = "block";
    tabela.style.display = "none";
  }
}

// Função para ordenar alunos por nome em ordem crescente.
function ordenarAlunosPorNomeCrescente() {
  const alunosOrdenados = [...alunos]; // Cria uma cópia do array original.
  const n = alunosOrdenados.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (alunosOrdenados[j].nome < alunosOrdenados[minIndex].nome) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Troca os alunos nas posições i e minIndex.
      const temp = alunosOrdenados[i];
      alunosOrdenados[i] = alunosOrdenados[minIndex];
      alunosOrdenados[minIndex] = temp;
    }
  }

  renderAlunos(alunosOrdenados);
  console.log("Ordenado por Nome");
}

// Função para ordenar alunos por RA em ordem decrescente.
function ordenarAlunosPorRaDecrescente() {
  const alunosOrdenados = [...alunos];
  const n = alunosOrdenados.length;

  for (let i = 0; i < n - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (alunosOrdenados[j].ra > alunosOrdenados[maxIndex].ra) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      // Troca os alunos nas posições i e maxIndex.
      const temp = alunosOrdenados[i];
      alunosOrdenados[i] = alunosOrdenados[maxIndex];
      alunosOrdenados[maxIndex] = temp;
    }
  }

  renderAlunos(alunosOrdenados);
  console.log("Ordenado por RA");
}

// Função para ordenar a lista de aprovados por nome em ordem crescente.
function ordenarAprovadosPorNomeCrescenteAprovados() {
  const aprovados = alunos.filter((aluno) => aluno.resultado === "Aprovado");
  const n = aprovados.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (aprovados[j].nome > aprovados[j + 1].nome) {
        // Troque os alunos nas posições j e j + 1.
        const temp = aprovados[j];
        aprovados[j] = aprovados[j + 1];
        aprovados[j + 1] = temp;
      }
    }
  }

  renderAlunos(aprovados);
  console.log("Ordenado somente APROVADOS");
  console.log(alunos);
}

// Adiciona um evento de escuta para quando o DOM estiver pronto.
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("selecao").addEventListener("change", function () {
    const selecao = this.value;

    if (selecao === "nomeCrescente") {
      ordenarAlunosPorNomeCrescente();
    } else if (selecao === "raDecrescente") {
      ordenarAlunosPorRaDecrescente();
    } else if (selecao === "aprovadosNomeCrescente") {
      ordenarAprovadosPorNomeCrescenteAprovados();
    }
  });
});

// Função para ocultar o formulário.
function sair() {
  document.getElementById("alunoForm").style.display = "none";
}
