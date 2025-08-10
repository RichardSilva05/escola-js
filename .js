function sortearNota() {
  // Gera uma nota aleatória entre 0 e 10 com 1 casa decimal
  return parseFloat((Math.random() * 10).toFixed(1));
}

function iniciar() {
  const totalTurmas = 3;
  let totalAlunosEscola = 0;
  let somaMediasEscola = 0;

  for (let turma = 1; turma <= totalTurmas; turma++) {
    const qtd = parseInt(prompt(`Digite a quantidade de alunos da Turma ${turma}:`));

    if (isNaN(qtd) || qtd <= 0) {
      alert("❌ Digite um número válido maior que 0!");
      turma--; // repete essa turma
      continue;
    }

    console.log(`\n📚 Turma ${turma} - ${qtd} alunos`);
    let somaMediasTurma = 0;
    let aprovados = 0;

    for (let aluno = 1; aluno <= qtd; aluno++) {
      const media = sortearNota();
      console.log(`Aluno ${aluno}: Média sorteada = ${media}`);
      somaMediasTurma += media;
      if (media >= 7) aprovados++;
    }

    const mediaTurma = somaMediasTurma / qtd;
    console.log(`✅ Alunos com média ≥ 7: ${aprovados}`);
    console.log(`📊 Média da Turma ${turma}: ${mediaTurma.toFixed(2)}`);

    totalAlunosEscola += qtd;
    somaMediasEscola += somaMediasTurma;
  }

  const mediaGeral = somaMediasEscola / totalAlunosEscola;
  console.log(`\n===============================`);
  console.log(`🏫 Total de alunos na escola: ${totalAlunosEscola}`);
  console.log(`📈 Média geral da escola: ${mediaGeral.toFixed(2)}`);
}

// Executa o programa
iniciar();