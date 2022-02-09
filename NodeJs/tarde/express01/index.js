const express = require('express');

const app = express();

//ROTAS

const usuarioRoutes = require("./routes/usuarioRoutes");
const produtoRoutes = require("./routes/produtoRoutes")
const cuponsRoutes = require("./routes/cuponsRoutes")

//DECODIFICA OS DADOS DA REQUISIÇÃO
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(usuarioRoutes)
app.use(produtoRoutes)
app.use(cuponsRoutes)

// O que fazer quando não encontra a rota:
app.use((req, res, next) => {
    res.status(404).send("<h1>Página não encontrada</h1>");
  });

app.listen(3000);