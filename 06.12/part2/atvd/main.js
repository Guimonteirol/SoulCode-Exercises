/*1.	Crie uma função construtora Pessoa com as propriedades
 nome, idade, peso, altura,
 e um método para calcular o imc. IMC = peso / (altura x altura). Criem várias pessoas! */
function atividade(){

    function Pessoa(nome, idade, peso, altura){ /*UMA FUNÇÃO CONSTRUTORA C/ PARÂMETROS*/
        this.nome = nome; /*atribuindo parâmetros ao objeto*/ 
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.calcularIMC = function(){ /*CRIANDO MÉTODO QUE IRÁ SER CHAMADO PELOS OBJETOS */
            var imc = (this.peso) / (this.altura * this.altura);
           return ` Seu nome é ${this.nome}, sua idade é ${this.idade}, seu peso é ${this.peso}, sua altura é ${this.altura} e seu imc é ${imc}`
        }
    }
        /*CRIANDO UM OBJETO*/ 
        var Pessoa1 = new Pessoa(
            'Guilherme',
            20,
            85.5,
            1.85
        );

        var Pessoa2 = new Pessoa(
            'Gustavo',
            18,
            70.00,
             1.75
        );

        var Pessoa3 = new Pessoa(
            'Ana', 22, 83, 1.70
        );

            return console.log(Pessoa1.calcularIMC());
}

atividade()