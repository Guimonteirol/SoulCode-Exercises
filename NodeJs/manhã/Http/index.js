//Declaração do core de HTTP
const http = require('http')
//Porta que o serviço irá escutar.
const porta = 3000
//construção da linha de serviço
                     //sai do front | sai do back
const server = http.createServer((req, res) =>{
    res.write('Opa foi enviado para o Front End.')
    res.end()
})
//Declaração do serviço para ativar a porta.
server.listen(porta, () =>{
    console.log(`Servidar funcionando na porta: ${porta}`)
})