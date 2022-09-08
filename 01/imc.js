//Definição dos dados
let nome = "Wendel";
let peso = 80;
let altura = 1.75;

//Fórmula
let imc  = peso / (altura * altura);

//Apresentação dos resultados
console.log(`${nome}, seu IMC é de ${imc.toFixed(1)}`);