const express = require('express');

const app = express();

const users = [];

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
app.get("/usuario/enviar", (req, res)=>{s
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
})


app.listen(3000);