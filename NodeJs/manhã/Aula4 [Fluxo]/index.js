const fs = require('fs')
//Fluxo principal do código.
console.log('inicio')

fs.writeFile('arquivo.txt','Olá este é um assincrono', function(){
    //Fluxo paralelo a execução principal.
    setTimeout(function(){
        console.log('Arquivo Criado com sucesso!')
    }, 3000)
})
//fs.writeFileSync('arquivo.txt','Olá este é um sincrono')
console.log('Fim do código!')