function atividade1(){

    class Pessoa{
        constructor(nome,sobrenome,peso,altura,idade){
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.peso = peso;
            this.altura = altura;
            this.idade = idade;
        }

        calcularIMC(){
            var imc = (this.peso) / (this.altura * this.altura);
            return ` Seu nome é ${this.nome}, sua idade é ${this.idade}, seu peso é ${this.peso}, sua altura é ${this.altura} e seu imc é ${imc.toFixed(2)}`
        }

        cumprimentar(){
            return `Olá ${this.nome}, seja bem vinde`
        }

        engordar(){
            if(this.peso < 50){
                return `Você precisa engordar um pouco mais`
            }
            else
                return`Procure manter seu peso`
        }

        tudo(){
            return ` ${this.cumprimentar()} + ${this.calcularIMC()} + ${this.engordar()}`
        }
    }

    var pessoa1 = new Pessoa(
        "Gui",
        "Monteiro",
        80.00,
        1.85,
        21
    )

    alert(pessoa1.tudo())

}

atividade1()