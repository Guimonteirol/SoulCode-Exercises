const pessoa = require("./pessoa")
const pet = require("./pet")

const pessoas = [
    new pessoa.Pessoa('Gui', 19,67, 1.85),
    new pessoa.Pessoa('Gui', 19,67, 1.85),
    new pessoa.Pessoa('Gui', 19,67, 1.85),
    new pessoa.Pessoa('Gui', 19,67, 1.85)
]

const pets = [
    new pet.Pet('bia', 19),
    new pet.Pet('bia', 19),
    new pet.Pet('bia', 19),
    new pet.Pet('bia', 19)
]

module.exports = { pessoas, pets }