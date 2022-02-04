/*ATIVIDADE 1*/ 
function gols(){
    var time1 = prompt("Digite o time 1: ")
    var gols1 = Number(prompt("Digite os gols do time 1:"))
    var time2 = prompt("Digte o time 2: ")
    var gols2 = parseInt(prompt("Digire os gols do time 2: "))

    if(gols1 == gols2){
        alert("EMPATE");
        console.log("EMPATE")
        alert("Vamos para o desempate:")
        var gols3 = Number(prompt("Digite os gols do time 1:"))
        var gols4 = parseInt(prompt("Digite os gols do time 2: "))
        if(gols3 > gols4){
            alert("O TIME " + time1 + " É O CAMPEÃO")
            console.log("TIME 1 GANHOU")
        }
        else{
            alert("O TIME " + time2 + " É O CAMPEÃO")
            console.log("TIME 1 GANHOU")
        }
    }
    else if(gols1 > gols2){
        alert("TIME " + time1 + " É O CAMPEÃO")
        console.log("TIME 1 GANHOU")
    }
    else{
        alert("O TIME " + time2 + " É O CAMPEÃO")
        console.log("TIME 1 GANHOU")
    }
}

/*ATIVIDADE 2*/

function diasDaSemana(){
    var lingua = prompt("ING | BR")
    var dias = Number(prompt("Digite um dia da semana em dígtos"))
    var semana_tra = false
    
    switch(lingua){
        case "BR":
        switch(dias){
        case 1:
            alert("Dia 1 corresponde ao Domingo")
            console.log("Dia 1 corresponde ao Domingo")
            break;
        case 2:
            alert("Dia 2 corresponde à Segunda-Feira")
            console.log("Dia 2 corresponde à Segunda-Feira")
            break;
        case 3:
            alert("Dia 3 corresponde à Terça-Feira")
            console.log("Dia 3 corresponde à Terça-Feira")
            break;
        case 4:
            alert("Dia 4 corresponde à Quarta-Feira")
            console.log("Dia 4 corresponde à Quarta-Feira")
            break;
        case 5:
            alert("Dia 5 corresponde à Quinta-Feira")
            console.log("Dia 5 corresponde à Quinta-Feira")
            break;
        case 6:
            alert("Dia 6 corresponde à Sexta-Ferira")
            console.log("Dia 6 corresponde à Sexta-Ferira")
            break;
        case 7:
            alert("Dia 7 cosrresponde ao Sábado")
            console.log("Dia 7 cosrresponde ao Sábado")
            break;
        default:
            alert("A sua semana tem mais de 7 dias é bê?" + "\n" + "Vamos novamente")
            diasDaSemana()
        }

        if((dias > 1) && (dias < 7)){
        semana_tra = true
        }

        switch(semana_tra){
        case true:
            alert("Esse é um dia de trabalho!")
            break
        case false:
            alert("Descanseee, que é fds")
            break;
         }
         break;

         case "ING":
            switch(dias){
                case 1:
                    alert("Sunday")
                    console.log("Dia 1 corresponde ao Domingo")
                    break;
                case 2:
                    alert("Monday")
                    console.log("Dia 2 corresponde à Segunda-Feira")
                    break;
                case 3:
                    alert("Tuesday")
                    console.log("Dia 3 corresponde à Terça-Feira")
                    break;
                case 4:
                    alert("Wednesday")
                    console.log("Dia 4 corresponde à Quarta-Feira")
                    break;
                case 5:
                    alert("Thursday")
                    console.log("Dia 5 corresponde à Quinta-Feira")
                    break;
                case 6:
                    alert("Friday")
                    console.log("Dia 6 corresponde à Sexta-Ferira")
                    break;
                case 7:
                    alert("Saturday")
                    console.log("Dia 7 cosrresponde ao Sábado")
                    break;
                default:
                alert("Is yor week longer than seven days, darling?" + "\n" + "Let's try again")
                diasDaSemana()
                }
        
                if((dias > 1) && (dias < 7)){
                semana_tra = true
                }
        
                switch(semana_tra){
                case true:
                    alert("This is a working day!")
                    break
                case false:
                    alert("Weekend!")
                    break;
                }
    }
}

/*ATIVIDADE 3*/

function atvd3(){
    var num = Number(prompt("Digite um número:"))

    while(num < 100){
        var num = Number(prompt("Digite um número:"))
    }

    while(num < 1000){
        num++
        console.log(num)
    }
}

atvd3()