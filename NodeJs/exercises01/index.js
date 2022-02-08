//const Produto = require('./produto')
//const produto = new Produto()
const inquirer = require('inquirer')
const {porcentagem} = require('./porcentagem')
const {produtos} = require('./database')
const Academico = require('./academico')
const {alunos} = require('./database')


//1)
/*const produtos = [
    produto.listagem('Maçã', 2.00, 'Fruta'),
    produto.listagem('Arroz', 5.00, 'Alimento'),
    produto.listagem('Sabonete', 1.00, 'Higiene')
]
console.log(produtos)*/

//2)
inquirer.prompt([
    {
        name:'n1',
        message: 'Digite um número para virar porcentagem'
    }
]).then((answers) =>{
    let n1 = parseFloat(answers.n1)
    console.log(porcentagem(n1))
})

//3)

produtos.forEach((produto)=>{
    console.log(produto)
})

//4)

console.log("Aprovados: " + Academico.aprovados(alunos).map((aluno)=>{
    return `${aluno.nome} : ${aluno.media}`
}));
console.log("Rerpovados: " + Academico.reprovados(alunos).map((aluno)=>{
    return `${aluno.nome} : ${aluno.media}`
}));
