// Herança
function heranca(){
class Animal {
    constructor(nome, idade, comidaFavorita) {
      this.nome = nome;
      this.idade = idade;
      this.comidaFavorita = comidaFavorita;
      this.acordado = true;
      this.bucho = [];
    }
  
    dormir() {
      console.log("Estou dormindo... zzzZZZZZZ");
      this.acordado = false;
    }
  
    acordar() {
      console.log("Tão cedo assim???");
      this.acordado = true;
    }
  
    comer(comida) {
      console.log(`Comendo ${comida}`);
      this.bucho.push(comida);
    }
  }
  
  class Gato extends Animal{
      constructor(nome, idade, comidaFavorita, cor){
        super(nome, idade, comidaFavorita); // referência à Classe-pai
      }
      miar(){
          console.log("Miau.");
      }
  }

  class Cachorro extends Animal{
      constructor(nome, idade, comidaFavorita, raca){
        super(nome, idade, comidaFavorita);
        this.raca = raca;
      }
      latir() {
        console.log("Esse animal late");
    }
  }

  class Passaro extends Animal{
      constructor(nome, idade, comidaFavorita, canto){
        super(nome, idade, comidaFavorita)
        this.canto = canto;
      }
      cantar(){
          console.log("Esse animal canta " + this.canto);
      }
  }

  var passaro1 = new Passaro("Ben", 2,"minhoca", "piu piu")
    passaro1.cantar();

  var cachorro1 = new Cachorro("Pitu",8, "ração","pastor alemão");
    cachorro1.latir();

  var gatinho = new Gato("frederico", 12, "peixe");
    gatinho.comer("peixe")
    console.log(gatinho.nome)
    gatinho.miar()
}

function atividade(){

    class Pessoa{
        constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        }

        seapresentar(){
            console.log(`O nome do aluno é ${this.nome} e a sua idade é ${this.idade}`)
        }
    }

    class Alune extends Pessoa{
        constructor(nome,idade,media){
            super(nome, idade);
            this.media = media;
        }

        exibirDados(){
            console.log(`${this.seapresentar()} e sua média é ${this.media}`)
        }
    }

    class Professor extends Pessoa{
        constructor(nome,idade,disciplina){
            super(nome, idade);
            this.disciplina = disciplina;
        }
        exibirDados(){
            return `O nome do profissional é ${this.nome}, sua idade é ${this.idade} e leciona ${this.disciplina}`
        }
    }

    class Monitor extends Professor{
        constructor(nome, idade, disciplina, cargaHoraria){
            super(nome, idade, disciplina);
            this.cargaHoraria = cargaHoraria;
        }
        exibirDados(){
            console.log(`${super.exibirDados()} e sua carga é de ${this.cargaHoraria}`)
        }
    }

    var monitor1 = new Monitor("Gui", 20, "História", 20)
    monitor1.exibirDados();
}

atividade()