var nome = prompt("Qual o seu nome?");
var num = prompt("Digite um número:");
var escolha = prompt("Escolha a opção 1 | 2 | 3");
var valida;

function verifica1(num){
 
       if((num > 0) && (num < 100)){
           alert("Seu número é: " + num + " e está contido!"+ " " + "Seu nome é: " + nome)
       }
       else{
         alert("Seu número não está contido!" + " " + "Seu nome é: " + nome)
        }
}

function verifica2(num){
    for(var i = 0; i < num ; i++){
       alert(i);
    }
}

function verifica3(num){
    var i = 0;
    while( i <= num){
      alert(i);
      i++;
    }

}

switch(escolha){
    case "1":
        verifica1(num);
        break;
    case "2":
        verifica2(num);
        break;
    case "3":
        verifica3(num);
        break;
}