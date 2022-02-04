const EventEmitter = require('events')
const { emit } = require('process')
const eventEmitter = new EventEmitter()
const meuModulo = require('./meu_modulo')
const soma = meuModulo.soma

eventEmitter.on('start',()=>{
    console.log(`... Durante Execução: ...`)
    soma(512,1024)
})

console.log('Antes da chamada ...')
eventEmitter.emit('start')
console.log('... Depois da chamada.')