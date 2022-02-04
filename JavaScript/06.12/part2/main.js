/*
 * Roteiro de Aula [06-12]
 * [ ] Inicializador {}
 * [ ] Propriedades
 * [ ] Métodos
 * [ ] Curso example
 * [ ] Função construtora
 * [ ] Criação de objetos com new
 * [ ] Igualdade de objetos
 * [ ] Array de objetos
 * [ ] Exercício 1
 * [ ] Correção + integrar objetos
 * [ ] Listagem de propriedades + valor
 * [ ] Usando arrow functions
 * [ ] Exercício 2
 */

function part1(){
    var produto= {
        nome: "sabonte",
        preco: 10.5,
        desconto: 0.3,
        mostrarProduto: function(){
            console.log(this.nome + " " + this.preco + " " + this.desconto)
        },
        aumentaPreco: function(acrescimo){
            this.preco += acrescimo;
        }
    };

    produto.nome = "sabonete caro";
    produto.preco = 12.5;

    produto.mostrarProduto();
    console.log(produto);
}

part1()