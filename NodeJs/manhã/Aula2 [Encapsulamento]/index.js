/*USANDO  REQUISIÇÕES*/

const fs =  require('fs');//chamada de módulo

fs.readFile('arquivo.txt', 'utf8',(err,data)=>{ //CHAMADA DO MÉTODO DO MÓDULO
                          //[parâmetros|callback]
    if(err){ //execuções do callback
        console.log(err);
    }else{
        console.log(data);
    }
});