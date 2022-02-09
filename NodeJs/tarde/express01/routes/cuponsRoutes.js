const { Router } = require('express')
const router = Router()
const cupons = []

router.get('/cupons/adicionar',(req, res)=>{
    res.send(`
         <h1>Adicione Os Cupons</h1>
        <form action="/cupons/enviar" method="POST" >
        <input name="cupom" placeholder= "Adicione um cupom" required/>
        <button>Enviar</button>
        </form>
    `)
} )

router.post('/cupons/enviar', (req,res)=>{
    const {cupom} = req.body;
    cupons.push({cupom});
    console.log(cupons)
    res.send(
        `<h1>O cupon foi adicionado foi: ${cupom}</h1>
        <a href="/cupons/adicionar">Adicione mais cupons</a>
        <a href="/cupons">Lista de cupons</a>
        `
    )

})

router.get('/cupons', (req,res)=>{
    let html = `
    <a href="/cupons">Adicione mais cupons</a>
    <ul>`
    cupons.forEach((c)=>{
        html += `<li>${c.cupom}</li>`
    })
    html += `</ul>`
    res.send(`
        <h2>Cupons:</h2>
        ${html}
    `)
})

module.exports = router;