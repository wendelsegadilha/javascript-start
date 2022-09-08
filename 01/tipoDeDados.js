let nome = "Wendel";
let salario = 1800.50;
let idade = 27;
let casado = true;
let efetivado;
let error = parseInt(nome);

console.log(typeof(nome));
console.log(typeof(salario));
console.log(typeof(idade));
console.log(typeof(casado));
console.log(typeof(efetivado));
console.log(typeof(error));

/*Convertendo dados*/
let a = "10";
let b = "5.76";

let c = parseInt(a) + parseFloat(b);

console.log(c);

let d = c.toString();

console.log(typeof(d));

