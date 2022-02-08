const express = require('express');

const app = express();

const produtos = [];
const users = [];
/*
app.get('/', (req, res) =>{
    res.send(`
    <h1>Hello, Node!</h1>
    <a href="/usuario">Novo Usuário</a>
    `)
});

app.get("/usuarios", (req,res)=>{
    let html = `<ul>`
    users.forEach((user) =>{
        html += `<li>${user.nome} | ${user.idade}</li>`
    });
    html += `</ul>`;

    res.send(html)
})

app.get("/usuario", (req, res)=>{
    res.send(`
        <h1>Novo Usuário</h1>
        <form action="/usuario/enviar" method="GET">
            <input name="nome" placeholder="Nome" required/>
            <input name="idade" placeholder="Idade" required/>
            <button>Enviar</button>
        </form>
    `)
})

//localhost:3000/usuario/enviar?nome=gui&idade=20
app.get("/usuario/enviar", (req, res)=>{
    console.log(req.query); // objeto com parâmetros de busca
    const { nome, idade } = req.query;
    users.push({ nome, idade});
    console.log(users);
    res.send(`<h1>Olá ${nome}, você tem ${idade} ano(s)!</h1>`);
})

// localhost:3000/usuario/1
app.get("/usuario/:index", (req, res)=>{
    const {index} = req.params;
    const usuario = users[index];

    if(usuario) {
        res.send(`<h1>Olá, ${usuario.nome}<!/h1>`)
    }
    else{
        res.status(404).send(`<h1>Usuário não encontrado!</h1>`)
    }

    console.log(index);
    res.send();
})*/



app.get('/', (req, res)=>{
    res.send(
        `<h1>Adicione Produtos</h1>
        <form action="/produto/enviar" method="GET" >
        <input name="nome" placeholder= "Nome" required/>
        <button>Enviar</button>
        </form>`
    )
})

app.get('/produto/enviar', (req, res)=>{
    const {nome} = req.query;
    produtos.push({nome});
    console.log(produtos);
    res.send(
        `<h1>O produto adicionado foi: ${nome}</h1>`
    )
})

app.get('/produtos', (req, res)=>{
    let html = `<ul>`
    produtos.forEach((p)=>{
        html += `<li>${p.nome}</li>`
    })
    html += `</ul>`
    
    res.send(html)
})


app.listen(3000);