function con(){
    var d = document.getElementById("dolar").value
    var r = document.getElementById("real").value

    var cambio = r / d

    console.log(cambio)

    alert("R$" + r+ " Equivale a $" + cambio.toFixed(2));
}