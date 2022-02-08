class Produto{
    listagem(nome, preco, tipo){
        return `O nome do produto é ${nome}. O seu preço é R$ ${preco} e o seu tipo é ${tipo}`
    }
}

module.exports = Produto;