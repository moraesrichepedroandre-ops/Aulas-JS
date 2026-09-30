// pegar os elementos no html
const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const nascimente = document.getElementById("nascimento");

const nomeResultado = document.getElementById("nomeResultado");
const dataResultado = document.getElementById("dataResultado");
const idadeResultado = document.getElementById("idadeResultado");
const boxResultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();// Impede que a tela recarregue

    // pegar o valor dos inputs
    const valorNome = nome.value;
    const valorNascimento = nascimente.value;
    
    // console.log(valorNome);
    // console.log(valorNascimento);

    // separa a data em 3 valores

    const dataSeparada = valorNascimento.split("-");

    console.log(dataSeparada);
    
    // Armazena as datas separadas em formato numerico
    const anoNascimento = Number(dataSeparada[0]);
    const mesNascimento = Number(dataSeparada[1]);
    const diaNascimento = Number(dataSeparada[2]);

    console.log(anoNascimento);

    // pega a data de hoje do sistema

    const hoje = new Date();

    const anoAtual = hoje.getFullYear(); //pega somente o ano
    const mesAtual = hoje.getMonth(); //pega somente o ano
    const diaAtual = hoje.getDate(); //pega somente o ano

    // console.log(hoje);
    // console.log(anoAtual);
    // console.log(mesAtual);
    // console.log(diaAtual);

    let idade = anoAtual - anoNascimento;

    // console.log(idade);

    if (mesNascimento > mesAtual) {
        idade = idade -1;
    }

    if (mesNascimento == mesAtual) {
       if (diaNascimento > diaAtual) {
           idade = idade -1; 
       }
        
    }

    // if (mesNascimento > mesAtual  || (mesNascimento == mesAtual && diaNascimento > diaAtual)) {
    //     idade = idade -1;
    // }

    //console.log(idade);
    
    const dataformatada = diaNascimento + "/" + mesNascimento + "/" + anoNascimento;

    nomeResultado.textContent = valorNome;
    dataResultado.textContent = dataformatada;
    idadeResultado.textContent = idade;

    boxResultado.style.display = "block";
})
