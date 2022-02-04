function atvd1(){
    var nomeP = ['Banana', 'Maçã', 'Abacate', 'Abacaxi'];
    var precoP = [5.0, 2.5,5.0,6.0]

    for(var i = 0 ; i < nomeP.length; i++){
        console.log( 
            "A fruta: " + nomeP[i] + " Custa: " + precoP[i] + "\n"
        )
    }
}

atvd1();

function atvd2(){
    var soma = 0;
    for(var i = 0 ; i<=1000; i++){
       soma = i + soma; 
    }
    return console.log(`A soma dos elementos é: ${soma}`)
}

atvd2();

function atvd3(){
    var array = [20, 30, 40, 50, 60, 70, 100]
    var arrayInv = [];
    for(var i = array.length - 1; i >= 0 ; i--){
      arrayInv.push(array[i])
    }

    console.log(array)
}



function atvd4(){
    var pares = []
    var cont = 0
    for(var i = 0 ; i < 10 ; i++){
        if(i % 2 == 0){
            pares = i;
            cont++
        }
    }
    return console.log(pares[cont].length)
}

atvd4();