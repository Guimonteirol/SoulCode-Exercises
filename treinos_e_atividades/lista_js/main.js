/* 1) Declare um conjunto de variáveis para representar um aluno: nome (string), nota1 (number), nota2 (number) e aprovado(boolean). Após isso, calcule a média do aluno. 
*/

function atvd1(){
    var nome = prompt("Digite seu nome:")
    var n1 = Number(prompt("Digite sua nota:"))
    var n2 = Number(prompt("Digite sua nota:"))
    var media = (n1 + n2) / 2
    alert("A sua média é " + media)
    console.log(media)
}


/*2) Receba via prompt() três números (um por vez) e diga qual é o maior entre eles
*/

function atvd2(){
    var maior = -9999
    var pos
    for(var i = 1; i <= 3; i ++){
        var num = Number(prompt("Digide um número:"))
        if(num > maior){
            maior = num
            pos = i
        }
    }
    alert(`O maior número é o ${maior} e a posição foi: ${pos}`)
}

/*3) Some de 0 até 100. Pode utilizar while ou for.
*/

function atvd3(){
    var i = 0;
    soma = 0
    while(i <= 100){
        soma = i + soma
        i++
    }
    console.log(`A soma foi de: ${soma}`)
}

/*4)Exiba na tela todos os números de 0 a 1000 que são pares.
*/

function atvd4(){
    var pares = []
    var j = 0
    for(var i = 0 ; i< 1000; i++){
        if(i % 2 == 0){
            pares[j] = i
            j++
        }
    }
   //console.log("Os números pares são:" + pares )
    console.log(pares)
}

/*5) Crie quatro funções: soma, subtração, divisão e multiplicação. Todas as funções devem ter dois parâmetros e retornar o resultado da operação.
*/

function atvd5(){
    var n1 = Number(prompt("Digite um número: "))
    var n2 = Number(prompt("Digite um número: "))

    function soma(n1,n2){
        var soma = n1 + n2;
        return soma;
    }
    
    function mult(n1,n2){
        var mult = n1 * n2;
        return mult;
    }

    function sub(n1,n2){
        var sub = n1 - n2;
        return sub;
    }

    function div(n1,n2){
        var div = n1 / n2;
        return div;
    }

    console.log(`A soma é ${soma(n1,n2)}
    A multiplicação é ${mult(n1,n2)}
    A subtração é ${sub(n1,n2)}
    A divisão é ${div(n1,n2)}`)
}

/* 6) Crie um array vazio, e leia via prompt() 5 valores. Em seguida, exiba o produto de todos os 5 elementos no array (multiplicação). Exemplo: [1, 2, 3, 4, 5] resulta em 120.
*/

function atvd6(){
    var vet = []
    var mult = 1;
    for(var i = 0; i< 5; i++){
        vet[i] = Number(prompt("Digite 5 valores:"));
    }
    for(var i = 0; i< 5; i++){
        mult = vet[i] * mult;
    }

    console.log("A multiplicação desses valeres é de " + mult)
}

/* 7) De acordo com o array abaixo, incremente 1 em todos os valores dele.
*/

function atvd7(){
    var valores = [1, 2, 3, 4, 5];

    for(var i = 0; i< valores.length; i++){
        valores[i] = valores[i] + 1;
    }

    console.log(valores)
}

/* 8)De acordo com o array abaixo, crie uma função que recebe um índice e remove o valor no índice indicado. 
*/

function atvd8(){
    var valores = [1, 2, 3, 4, 5];
    var pos = Number(prompt("Digite um valor:"))
    var index = valores.indexOf(pos)
    valores.splice(index, 1);
    
    
    console.log(valores)
}

/* 9)Crie um objeto que representa um aluno. Com atributos: nome, média, idade. E um método que exibe todos os atributos via console.log().
*/

function atvd9(){

    var aluno = {
        nome: "Guilherme",
        media: 10.00,
        idade:20,
        exibirDados : function(){
            console.log(`Nome do aluno é ${this.nome} a sua média é de ${this.media} e a sua idade é de ${this.idade}`)
        }
    }
    aluno.exibirDados();
}

/* 10)Crie uma função construtora para um objeto Curso. E crie dois cursos diferentes.
*/

function atvd10(){

    function Curso(nome, preco){
        this.nome = nome;
        this.preco = preco;
        this.exibirDados = function(){
            console.log(`O nome do curso é ${this.nome} e o preço é de ${this.preco}`)
        }
    }
    var curso1 = new Curso(
        'Curso sobre HTML',
        500.00
    );
    var curso2 = new Curso(
        'curso de CSS',
        600.00
    )

    curso1.exibirDados();
    curso2.exibirDados();
}


/*  11)Receba um nome e abrevie. Exemplo: “José Almir” resulta em  “José A.”
*/


/* 12)Crie uma classe Aluno, com os atributos nome, idade, média e um método que retorna um boolean informando se a média é maior que 7 (aluno aprovado).
*/

function atvd12(){

    class Aluno{
        constructor(nome, idade, media){
            this.nome = nome;
            this.idade = idade;
            this.media = media;
        }
        passeiDeAno(){
            if(this.media >= 7){
                return true
            }
            else{
                return false
            }
        }
    }

    var aluno1 = new Aluno('Guilherme',20, 9)
    console.log(`Nome do aluno: ${aluno1.nome}, sua idade é ${aluno1.idade} e sua nota foi ${aluno1.media} | passou de ano? ${aluno1.passeiDeAno()}`)
}

/* 13) Usando a classe Aluno crie um array de 5 alunos.
*/

function atvd13(){

    class Aluno{
        constructor(nome, id, nota){
            this.nome = nome;
            this.id = id;
            this.nota = nota;
        }

        exibirDados(){
            var alunos = [aluno1, aluno2, aluno3, aluno4, aluno5]
            console.log(alunos)
        }

    }

    var aluno1 = new Aluno(
        'Gui',01,10
    )
    var aluno2 = new Aluno(
        'Ana',02,7
    )
    var aluno3 = new Aluno(
        'Peu',03,9
    )
    var aluno4 = new Aluno(
        'Gu',04,9.5
    )
    var aluno5 = new Aluno(
        'Van',05,8
    )
    aluno1.exibirDados()
}




/* 14) Adicione o método notaExtra() na classe Aluno, ela recebe uma pontuação e adiciona na média do aluno.
 Porém, a média resultante não deve passar de 10, faça uma condição para impedir que a média fique com um valor inválido como 11 por exemplo.
*/ 

function atvd14(){
    class Aluno{
        constructor(nome, id, nota){
            this.nome = nome;
            this.id = id;
            this.nota = nota;
        }

       addNota(){
           var plus = Number(prompt("Adione uma nota"))
            var media = this.nota + plus
           if(media <= 10){
                alert(`A média do aluno é de ${media}`)
           }
           else{
               alert(`A média não pode ser maior que 10`)
           }
       }

    }
    var aluno1 = new Aluno(
        'Gui',01,6
    )
        aluno1.addNota();
}

