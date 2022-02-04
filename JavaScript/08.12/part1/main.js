const alunos = [
    {id: 1, nome: "Guilherme", sobrenome: "Monteiro", nas: "2000", rg:"90992938", cpf:"839489239", gen: "M", renda: 4000.00},
    {id: 2, nome: "Ana", sobrenome: "Caetano", nas: "1997", rg:"90992938", cpf:"839489239", gen: "F", renda: 3000.00},
    {id: 3, nome: "Pedro", sobrenome: "Oliveira", nas: "1999", rg:"90992938", cpf:"839489239", gen: "M", renda: 2000.00},
    {id: 4, nome: "Gustavo", sobrenome: "Guimarães", nas: "2005", rg:"90992938", cpf:"839489239", gen: "M", renda: 4200.00},
    {id: 5, nome: "Vanessa", sobrenome: "Costa", nas: "2001", rg:"90992938", cpf:"839489239", gen: "F", renda: 1400.00},
    {id: 6, nome: "Rose", sobrenome: "Sá", nas: "2003", rg:"90992938", cpf:"839489239", gen: "F", renda: 2300.00},
    {id: 7, nome: "Elvira", sobrenome: "Monteiro", nas: "1930", rg:"90992938", cpf:"839489239", gen: "F", renda: 5600.00},
    {id: 8, nome: "Silas", sobrenome: "Jacobina", nas: "1940", rg:"90992938", cpf:"839489239", gen: "M", renda: 3400.00},
    {id: 9, nome: "Camila", sobrenome: "Pinho", nas: "2000", rg:"90992938", cpf:"839489239", gen: "F", renda: 1200.00},
    {id: 10, nome: "Lara", sobrenome: "Silva", nas: "2002", rg:"90992938", cpf:"839489239", gen: "F", renda: 4200.00},
    {id: 11, nome: "Luana", sobrenome: "Monteiro", nas: "2001", rg:"90992938", cpf:"839489239", gen: "F", renda: 2000.00},
    {id: 12, nome: "João", sobrenome: "Costa", nas: "2010", rg:"90992938", cpf:"839489239", gen: "M", renda: 4000.00}
]

atvd1 = alunos.filter( (alunos) => (alunos.renda > 2000)).map((alunos) => (alunos.renda* 1/3).toFixed(2) )
console.log(atvd1)

renda = alunos.map((alunos) => (alunos.renda*0.35).toFixed(2));
//console.log(renda)

girl = alunos.filter((alunos) => alunos.gen === 'F' ).map((alunos) =>
 (`${alunos.nome} | Gênero: ${alunos.gen} | Renda: ${alunos.renda}`))
//console.log(girl)

emprestimo = alunos.map((alunos) =>
 (`${alunos.id}) ${alunos.nome} ${alunos.sobrenome} | Renda: ${(alunos.renda*0.25).toFixed(2)}`))
//console.log(emprestimo)

var media = alunos.reduce( (cont, alunos) => cont + alunos.renda, 0 );
console.log(media)

  
  // Exemplo de acumuladores aritméticos para estruturas de vetores.
/*  const somaValores = produtos.reduce(
    (acumulo, produtos) => acumulo + produtos.valor,
    0
  );
  */