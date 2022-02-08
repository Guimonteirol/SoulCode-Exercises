const dataBse = require("./database");
const { imc } = require("./imc");

dataBse.pessoas.forEach((pessoa) => {
    console.log(pessoa.nome, pessoa.idade, imc(pessoa.peso, pessoa.altura))
});

dataBse.pets.forEach((pet) => {
    console.log("O nome do pet é: " + pet.nome, pet.idade)
})