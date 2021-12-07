/*Monte um vetor com os números pares de 12 posições. Eles representará a adição de alunos a uma turma, cada aluno terá as seguintes informações: [id, nome, sobrenome, nascimento, rg, cpf, genero, renda].
Adicione o aluno [id: 13, nome: “Marcos”, sobrenome: “Rosa”, nascimento: 12/02/1995, rg: 45.862.552 9, cpf: 356.446.712 - 41, genero: “M”, renda: 2750.00]. Ao adicionar remova o aluno de ID=1.
Mapei o aluno pelo nome e sobrenome para uma constante chamada nomeCompleto. Mostre no console do navegador.
Mapei o aluno pela renda para uma constante chamada rendaBase. Mostre no console do navegador.
 */

var alunos = [
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
    {id: 12, nome: "João", sobrenome: "Costa", nas: "2010", rg:"90992938", cpf:"839489239", gen: "M", renda: 4000.00},
]

alunos.splice(0,1,
    {id: 13, nome: "Marcos", sobrenome: "Rosa", nas: "12/02/1995", rg: "45.862.552 9", cpf: "356.446.712 - 41", gen: "M", renda: 2750.00})
console.log(alunos)

var nomes = alunos.map((alunos)=>alunos.nome);
console.log("Nome dos alunos: " + nomes)

var rendaBase = alunos.map((alunos)=>alunos.renda);
console.log("A reda dos aluno é de: " + rendaBase)

