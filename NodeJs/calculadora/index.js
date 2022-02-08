const inquirer = require('inquirer')
const {soma, mult, sub, div} = require('./calculos')
const resp = '';

inquirer.prompt([
    {
        name:'n1',
        message: 'Digite um número:'
    },
    {
        name:'n2',
        message:'Digite outro número'
    },
    {
        name:'op',
        message:`Escolha sua operação:
        1)Adição |
        2)Multiplicação |
        3) Subtração |
        4) Divisão |`
    }

]).then((answers) =>{
    let nu1 = parseFloat(answers.n1)
    let nu2 = parseFloat(answers.n2)
    let op = answers.op
    switch(answers.op){
        case '1':
           console.log(soma(nu1,nu2))
         break;
         case '2':
            console.log(mult(nu1,nu2))
          break;
          case '3':
            console.log(sub(nu1,nu2))
          break;
          case '4':
            console.log(div(nu1,nu2))
          break;
          default:
              console.log(`O dígito "${op}" não corresponde a uma operação`)
            
    }
    
}).catch((err)=> console.log(err))