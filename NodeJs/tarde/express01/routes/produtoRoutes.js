const {Router} = require('express')
const produtos = []
const router = Router()

router.get('/', (req, res)=>{
    res.send(
        `<h1>Adicione Produtos</h1>
        <form action="/produto/enviar" method="POST" >
        <input name="nome" placeholder= "Nome" required/>
        <button>Enviar</button>
        </form>`
    )
})

router.post('/produto/enviar', (req, res)=>{
    const {nome} = req.body;
    produtos.push({nome});
    console.log(produtos);
    res.send(
        `<h1>O produto adicionado foi: ${nome}</h1>
        <a href="/">Adicione mais produtos</a>
        <a href="/produtos">Lista de produtos</a>
        `
    )
})

router.get('/produtos', (req, res)=>{
    let html = `
    <a href="/">Adicione mais produtos</a>
    <ul>`
    produtos.forEach((p)=>{
        html += `<li>${p.nome}</li>`
    })
    html += `</ul>`
    
    res.send(html)
})

module.exports = router;