const Produto = require('./produto')
const produto = new Produto();
const aluno = require('./alunos')


const produtos = [
    produto.listagem('Maçã', 2.00, 'Fruta'),
    produto.listagem('Arroz', 5.00, 'Alimento'),
    produto.listagem('Sabonete', 1.00, 'Higiene')
]

const alunos = [
   new aluno.Alunos('Ana', 7, 6),
   new aluno.Alunos('Gui', 9, 8),
   new aluno.Alunos('Gu', 10, 8)
]

module.exports = {produtos, alunos}