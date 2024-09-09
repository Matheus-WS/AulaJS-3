// Desenvolva um programa que recebe um código de veículo (1: Carro, 2: Moto) e, utilizando switch case, exibe informações sobre o tipo de veículo.
// Ex: Uno Mille, Gol 1.0 ... e ao selecionar um veículo devolva as informações dele:
// ○ Gol 1.0
// ○ Marca Volkswagen
// ○ Peso = 2.5 toneladas
// ○ tanque = 30 litros
// ○ Valor = R$ 36.000,00

var prompt = require('prompt-sync')()


let veiculo = Number(prompt("Insira o codigo do veiculo (1- Carro 2- Moto) : "))


switch (true) {


    case (veiculo ==1) :
    console.log("marca = porsche")
    console.log ("modelo = 911 carrera gts")
    console.log ("tanque = 67 litros")
    console.log ("peso = 1600kg")
    console.log ("preço = R$ 1,055 milhão")
    break;
   
    case(veiculo == 2):
    console.log("marca = Yamaha")
    console.log ("modelo = mt07")
    console.log ("tanque = 14 litros")
    console.log ("peso = 183kg")
    console.log ("preço = R$ 39.990,00")


    break;


    default:
    console.log("tipo de veiculo não listado")


}
