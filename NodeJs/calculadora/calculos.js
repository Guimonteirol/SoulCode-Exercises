function soma(n1, n2){
    return `A soma de ${n1} + ${n2} = ${n1 + n2}`
   
}

function mult(n1,n2){
    return `A multiplicação de ${n1} X ${n2} = ${n1 * n2} `
}

function sub(n1,n2){
    return `A divisão de ${n1} - ${n2} = ${n1 - n2} `
}

function div(n1,n2){
    return `A divisão de ${n1} \ ${n2} = ${n1 / n2} `
}

module.exports = {soma, mult, sub, div}