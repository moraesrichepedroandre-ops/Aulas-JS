// let nome1 = "levi";
// let nome2 = "duda";
// let nome3 = "gustavo";
// let nome4 = "bernardo";

// // ----------- ARRAY
// //        0         1        2         3        
// let nomes = ["levi", "duda", "gustavo", "bernardo"]; //  criação do Array/lista

// console.log (nomes);//mostra a lista completa na mesma linha

// console.log(nomes {1});//mostra o item da posição mencionada entre colchetes

// nome4 "ana";
// nomes[3] = "ana"; // altero o valor na posição especifica

// console.log(nomes.length); // mostra o tamanho do Array

// ------------ exercicios --------------
// exercicio 07 - lista de frutas
// crie um array chamado frutas contendo 5 frutas.
// depois:
// 1.   exiba o array completo.
// 2.   exiba a primeira fruta.
// 3.   exiba a terceita fruta.
// 4.   exiba a quantidade de frutas.

//     let frutas = ["morango", "banana", "manga", "bergamota", "uva"];
//     console.log(frutas);
//     console.log(frutas[0]);
//     console.log(frutas[1]);
//     console.log(frutas.length);

// // exercicio 08 - lista de cidades
// // crei um array contendo 5 cidades brasileiras.
// // depois:
// // 1.   exiba o array complete.
// // 2.   altere a segunda cidade.
// // 3.   exiba a segunda cidade.
// // 4.   exiba a quantidade de cidades.

//  let cidades = ["são paulo", "são caetano", "maua", "santo andré", "são bernardo do campo"];
//     console.log(cidades);
//     cidades[1] = "santo andré";
//     console.log(cidades[1]);
//     console.log(cidades.length);

// exercicio 09 - nomes
// crie um array com 6 nomes.
// utilize um for para exibir todos os nomes no console.

// let nomes = ["andré", "joão", "pedro", "manu", "ana"];

// for (let numero = 0; numero < nomes.length; numero++) {
//     console.log = (nomes[numero]);
//     }

// exercicio 10 - preços
// crie um array contendo 5 preços de produtos.
// utilize um for para exibir todos os preços.

// let precos = [10.50, 25.90, 7.99, 45.00, 12.50];

// for (let numero = 0; numero < precos.length; numero++) {
//     console.log = (precos[numero]);
//     }

// exercicio 11 - produtos e preços
// crie dois arrays, um contendo 5 nomes de produtos e 
// outro contendo 5 preços de produtos
// utilize um for para exibir todos os nomes e preços.

// let produtos = ["arroz", "feijão", "lasanha", "refrigerante", "cafe"];
// let valores = [10.50, 15.90, 7.99, 5.00, 20.50];

// for (let numero = 0; numero < produtos.length; numero++) {
//     console.log = (produtos[numero] + " - R$ " + valores[numero]);
//     }

// ---------- estrutura de repetição + estrutura de decisão ----------
// let numeros = [5, 9, 10, 2, 20, 32, 7, 17, 9, 12];
// for (let index = 0; index <= 10;  index++) {// contando de 0 a 10

//     if (index >= 5) {// verificando se é maior ou igual a 5
//         console.log(numeros[index]);//mostra o numero
//     }
// }

// let numeros = [5, 9, 10, 2, 20, 32, 7, 17, 9, 12];
// for (let index = 0; index <= 10;  index++) {// lendo o array
//    let sobra = numeros [index] % 2;

// if (sobra == 0) {
//     console.log("o numero " + numeros[index] + " é par");

// } else {
//    console.log("o numero " + numeros[index] + " é impar");
//   }
// }

// exercicio 01 - analisando notas
// crie um array com 8 notas.
// utilize for para percorrer as notas e if/else para informar:
//    nota maior ou igual a 7 - "aprovado"
//    nota menor que 7 - "reprovado"

let notas = [8, 6, 9, 5, 7, 4, 10, 6];

for (let numero = 0; numero < notas.length; numero++) {
   if (notas[numero] >= 7) {
    console.log(notas[numero] + "-> aprovado");  
   } else {
    console.log(notas[numero] + "-> reprovado");
   }     
}

// exercicio 02 - temperaturas.
// crie um array contendo 7 temporaturas.
// percorra o array e classifique cada temperaturas;
//    maior que 30 - "quente"
//    entre 20 e 30 - "agradavel"
//    menor que 20 - "frio"

let temperaturas = [32, 25, 18, 30, 35, 22, 15];

for (let numero = 0; numero < temperaturas.length; numero++) {
   if (temperaturas[numero] > 30) {
    console.log(temperaturas[numero] + "-> quente");  
   } else if (temperaturas[numero] >= 20 && temperaturas[numero] <= 30) {
    console.log(temperaturas[numero] + "-> agradavel");
   } else {
    console.log(temperaturas[numero] + "-> frio");
   }     
}
