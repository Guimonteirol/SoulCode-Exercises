alert("Bem vindo ao parque, digite as seguintes informações:")
var nome = prompt("Digite seu nome:");
var validacao

while(nome == ""){
    alert("Escreva seu nome!");
    var nome = prompt("Digite seu nome :");
}

if(nome != ""){
    console.log("Seu nome é: " + nome);

    var idade = prompt("Digite sua idade:");

    if(idade == ""){
    alert("Escreva sua idade!");
    var idade = prompt("Digite sua iade:");
    }
    else{
        if(idade <= 10){
            alert("Você é infantil A");
            console.log("Infantil A");
            validacao = false
        }

        else if((idade > 10) && (idade <= 17) ){
            alert("Você é infantil B");
            console.log("Infantil B");
            validacao = false
        }

        else if((idade > 18) && (idade <= 25) ){
            alert("Você é Joven");
            console.log("Joven");
            validacao = true
        }

        else if((idade > 25) ){
            alert("Você é Adulto");
            console.log("Adulto");
            validacao = true
        }
    }
}

switch(validacao){
    case true:
        alert("Você pode passar!");
        break;
    case false:
        alert("Você precisa de um responsável");
        break;
}

