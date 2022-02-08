//Declaração do core de HTTP
const http = require('http')
const inquirer = require('inquirer')
const imc = require('./imc')
const caulculo = imc.imc
//Porta que o serviço irá escutar.
const porta = 3000
let retorno = '' 

inquirer.prompt([
    {   name:'altura',
        message:'Digite sua altura: '
    },
    {
        nome:'peso',
        message: 'Entre com seu peso'
    }
]).then((answers) => {
    retorno = caulculo(parseFloat(answers.altura), parseFloat( answers.peso))
}).catch((err)=> console.log(err))

//construção da linha de serviço
                     //sai do front | sai do back
const server = http.createServer((req, res) =>{
    res.write( retorno)
    res.end()
})
//Declaração do serviço para ativar a porta.
server.listen(porta, () =>{
    console.log(`Servidor funcionando na porta: ${porta}`)
   
})