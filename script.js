
const student = [
  {
    name: 'Maicon',
    nota1: 6,
    nota2: 3,
  },

  {
    name: 'Maria',
    nota1: 8,
    nota2: 7,
  },

    {
    name: 'Larissa',
    nota1: 10,
    nota2: 5,
  },

  {
    name: 'Henrique',
    nota1: 4,
    nota2: 6,
  },

  {
    name: 'José',
    nota1: 9,
    nota2: 10,
  },


]

let average;

for(let index = 0; index < student.length; index++) {
  average = ((student[index].nota1 + student[index].nota2) / 2).toFixed(2);
  if (average >= 7 ){
    alert(`A média do(a) aluno(a) ${student[index].name} é: ${average}
    Parabéns, ${student[index].name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do aluno ${student[index].name} é: ${average}
    Não foi dessa vez, ${student[index].name}! Tente novamente!`)
  }
}
