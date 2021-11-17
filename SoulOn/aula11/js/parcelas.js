
var valor = Number(prompt("O valor da compra?"))

var vezes = Number(prompt("De quantas vezes quer dividir?"))

var parcelas = valor / vezes

alert("Vai pagar " + vezes + " parcelas de " + parcelas + " + 20 de frete")

var total = parcelas + 20

alert("O total é de " + total + " reais")