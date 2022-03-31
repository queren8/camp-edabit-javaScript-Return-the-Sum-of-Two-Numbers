let n1 = Number(window.prompt("Digite um número!"))
let n2 = Number(window.prompt("Digite outro número!"))        

function Soma() {
    return n1 + n2;
}

window.alert(`A soma de ${n1} e ${n2} é igual a ${Soma()}`)
