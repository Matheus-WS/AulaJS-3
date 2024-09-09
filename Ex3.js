//Desenvolva um programa que recebe a idade de uma pessoa e, utilizando switch case, determina a categoria: "Criança" (0-12), "Adolescente" (13-17),
// "Adulto" (18-64), "Idoso" (65+).

var prompt = require('prompt-sync')()

const idade = prompt("Digite a idade:");


switch (true) {
    case (idade >= 0 && idade <= 12):
        console.log("Categoria: Criança");
        break;
    case (idade >= 13 && idade <= 17):
        console.log("Categoria: Adolescente");
        break;
    case (idade >= 18 && idade <= 64):
        console.log("Categoria: Adulto");
        break;
    case (idade >= 65):
        console.log("Categoria: Idoso");
        break;
    default:
        console.log("Idade inválida");
}
