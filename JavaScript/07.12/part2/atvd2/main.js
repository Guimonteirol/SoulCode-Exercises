function atividade2(){

    class Animal{
        constructor(nome, idade, acordado){
            this.nome = nome;
            this.idade = idade;
            this.acordado = acordado;
        }

        comer(){
           return "O cachorro está acordado e pode comer"
        }

        dormir(){
            if(this.acordado == true){
               return this.comer()
            }
            else{
                return `O ${this.nome} está dormindo`
            }
        }
    }

    var cachorro = new Animal(
        "Peu",
        8,
        false
    )

    alert(cachorro.dormir())
}

atividade2()