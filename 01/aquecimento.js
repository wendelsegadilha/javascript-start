let nome = "Wendel Segadilha";
let produto = "Notebook Gamer";
let preco = 6200;
let desconto = 10;

console.log(`Olá, ${nome}`);
console.log(`Você comprou: ${produto}`);
console.log(`Custou ${preco}`);
console.log(`Desconto %: ${desconto}`);

let descontoCalculado = (preco * desconto) / 100;

console.log(`Desconto calculado: ${descontoCalculado}`);

let precoFinal = preco - descontoCalculado;

console.log(`Preco final: ${precoFinal}`);
