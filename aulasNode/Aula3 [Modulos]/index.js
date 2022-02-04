//Encapsulamento do módulo interno.
const meuModulo = require('./meu_modulo')
//Encapsulamento do módulo externo.
const inquirer = require('inquirer')
//Encapsulamento do método do módulo.
const soma = meuModulo.soma
//Uso do módulo inquerer.
inquirer.prompt([
    {
        name:'n1',
        message:'Digite o valor de n1:'
    },
    {
        name:'n2',
        message:'Digite o valor de n2:'
    }
]).then((answers) =>{
    //Coleta dos valores em console.
    let n1 = parseFloat(answers.n1)
    let n2 = parseFloat(answers.n2)
    //Uso do método via encapsulamento.
    soma(n1,n2)
}).catch((err) => console.log(err)) //Tratamento para retorno.