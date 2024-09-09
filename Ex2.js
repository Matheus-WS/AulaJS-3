// Desenvolva um programa que recebe um número correspondente ao mês (1 a 12) e, utilizando switch case, imprime a estação do ano
// (Primavera, Verão, Outono, Inverno)
var prompt = require ('prompt-sync')()


let mes = Number(prompt("Insira mes que voce deseja saber a estação: "))


switch (true){


    case(mes>= 1 && mes<4):
    console.log("Verão")
    break;


    case(mes>=4 && mes<7):
    console.log("Outono")
    break;


    case(mes>=7 && mes<10):
    console.log("Inverno")
    break;


    case(mes>=10 && mes<=12):
    console.log ("Primavera")
    break;


    default:
        console.log("Mes invalido")


}
