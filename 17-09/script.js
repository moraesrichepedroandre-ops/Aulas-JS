// let nota = 6;

// if (nota < 5) {
//     console.log("Henrique reprovado");

// // } else if (nota < 7) {
// // } else if (nota == 5 || nota == 6) {
// } else if (nota >= 5 && nota < 7) {    
//     console.log("Henrique de rec.");

// } else {
//     console.log("Henrique aprovado")
// } 
// ________________________________________________________________
// 01 - temperatura 
// crie uma variavel chamada temperatura.
// utilize uma estrutura condicional para verificar:
//    temperatura maior que 30 - "esta quente!"
//    temperatura entre 20 e 30 - "temperatura agradavel."
//    temperatura menor que 20 - "esta frio!"
// exiba a mensagem no console.

let temperatura = 25;

if (temperatura > 30) {
    console.log("esta quente!");
    
} else if (temperatura >= 20 && temperatura <= 30) {
    console.log("temperatura agradavel.");
} else {
    console.log("esta frio!");

}
// ____________________________________________________________________
// 02 - velocidade do veiculo.
// crie uma variavel chamada velocidade.
// verifique.
//     ate 60 kn/h - "velocidade permitida"
//     acima de 60 km/h e ate 80 km/h - "atenção: velocidade acima do permitido"
//     acima de 80 km/h - "velocidade muito alta"
// exiba a mensagem correspondente no console.


let velocidade = 75;

if (velocidade <= 60) {
    console.log("velocidade permitida");
} else if (velocidade <= 80) {
    console.log("atenção: velocidade acima do permitido");
} else {
    console.log("velocidade muito alta");
}
// ___________________________________________________________________
// 03 - estoque
// crei uma variavel chamada qantidadeEstoque.
// verifique:
//      quantidade igual a 0 - "produto esgotado"
//      quantidade entre 1 a 10 - "estoque baixo"
//      quantidade acima de 10 - "estoque disponivel"
// exiba a situação do estoque.


let quantidadeEstoque = 8;

if (quantidadeEstoque === 0) {
    console.log("produto esgotado");
} else if (quantidadeEstoque >= 1 && quantidadeEstoque <= 10) {
    console.log("estoque baixo");
} else {
    console.log("estoque disponivel");
}

// _________________________________________________________________________
// execicio 04 - login
// crie duas variaveis:
// let usuario = "admin";
// let senha = "1234";
// verifique se o usuario e a senha estáo corretos.
// se estiverem corretos: login realizado com sucesso
// se não: usuário ou senha incorretos

let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
    console.log("Login realizado com sucesso");
} else {
    console.log("Usuário ou senha incorretos");
}


// _________________________________________________________________________
// exercicio 05 - horario do dia 
// crie uma variavel chamada hora contendo um valor entre 0 e 23.
// utilize condicionais para informar:
//        0 até 11 - "bom dia"
//        12 até 17 - "boa tarde"
//        18 até 23 - "boa noite"

let hora = 14;

if (hora >= 0 && hora <= 11) {
    console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite");
}

// ____________________________________________________________________________
// exercicio 06 - classificação de nota de um produto
// uma loja recebe avaliaçõ de seus clientes utilizado notas de 1 a 5
// crie uma variavel  chamada nota.
// classifique a avaliação:
//       5 - "excelente"
//       4 - "muito bom"
//       3 - "bom"
//       2 - "regular"
//       1 - "ruim"
// caso a nota nao esteja entre 1 e 5, exiba "nota invalida".

let nota = 5;

if (nota === 5) {
    console.log("excelente");
} else if (nota === 4) {
    console.log("muito bom");
} else if (nota === 3) {
    console.log("bom");
} else if (nota === 2) {
    console.log("regular");
} else if (nota === 1) {
    console.log("ruim");
} else {
    console.log("nota invalida");
}


// _____________________________________________________________________________
// exercicio 07 - tipo de ingresso
// crie uma variavel chamada tipoIngresso.
// Ela podera receber:
// "inteira"
// "meia"
// "vip"
// utilize condicionais para exibir o preço correspondente:
//      inteira - R$ 40
//      meia - R$ 20
//      vip - R$ 80
// caso seja informado outro tipo, exiba:
// tipo de ingresso invalido

let tipoIngresso = "inteira";

if (tipoIngresso === "inteira") {
    console.log("R$ 40");
} else if (tipoIngresso === "meia") {
    console.log("R$ 20");
} else if (tipoIngresso === "vip") {
    console.log("R$ 80");
} else {
    console.log("tipo de ingresso invalido");
}