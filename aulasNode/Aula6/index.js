const os = require('os')
const path = require('path')
const fs = require('fs')
/*
const caminho = (path.resolve('teste.txt'))
console.log('Info do SO:')
console.log(os.cpus())
console.log(os.freemem())
console.log(os.homedir())
console.log(os.type())
*/
/*
const diretorio = 'relatorio'

//Segmentando o caminho.
console.log('Info do Caminho:')
console.log(path.dirname(caminho))
console.log(path.basename(caminho))
console.log(path.extname(caminho))
//Formatar o caminho de entrega.
const criado = path.join('./','sena',diretorio, path.basename(caminho))
*/
if(!fs.existsSync('./minhapasta')){
    console.log('Não existe este caminho.')
    fs.mkdirSync('minhapasta')
}

if(fs.existsSync('./minhapasta')){
    console.log('Já existe.')
}