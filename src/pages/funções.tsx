
export default function Funções(){
const frutas = [
    {
      nome: "Maçã Gala",
      cor: "vermelha",
      peso_gramas: 180,
      origem: "Chile",
      disponibilidade_estacao: ["outono", "inverno"],
      acidez: 30,
      preco_kg: 7.50
    },
    {
      nome: "Banana Prata",
      cor: "amarela",
      peso_gramas: 100,
      origem: "Brasil",
      disponibilidade_estacao: ["ano todo"],
      acidez: 10,
      preco_kg: 5.00
    },
    {
      nome: "Manga Tommy",
      cor: "laranja",
      peso_gramas: 350,
      origem: "Brasil",
      disponibilidade_estacao: ["verão", "outono"],
      acidez: 20,
      preco_kg: 12.00
    },
    {
      nome: "Morango",
      cor: "vermelha",
      peso_gramas: 15,
      origem: "Argentina",
      disponibilidade_estacao: ["primavera", "verão"],
      acidez: 70,
      preco_kg: 25.00
    },
    {
      nome: "Abacaxi Pérola",
      cor: "amarela",
      peso_gramas: 1200,
      origem: "Costa Rica",
      disponibilidade_estacao: ["ano todo"],
      acidez: 90,
      preco_kg: 8.90
    },
    {
      nome: "Limão Tahiti",
      cor: "verde",
      peso_gramas: 50,
      origem: "México",
      disponibilidade_estacao: ["ano todo"],
      acidez: 10,
      preco_kg: 4.00
    },
    {
      nome: "Uva Crimson",
      cor: "vermelha",
      peso_gramas: 5, // Peso individual
      origem: "Peru",
      disponibilidade_estacao: ["verão"],
      acidez: 40,
      preco_kg: 18.00
    },
    {
      nome: "Pera Williams",
      cor: "verde",
      peso_gramas: 220,
      origem: "Portugal",
      disponibilidade_estacao: ["inverno", "primavera"],
      acidez: 2,
      preco_kg: 10.50
    }
  ];


/*
let FrutasFiltradas = []

for(let i = 0; i < frutas.length; i++){
    const frutaAtual = frutas[i]
    if(frutaAtual.acidez >= 50 && frutaAtual.peso_gramas >= 500){
        FrutasFiltradas.push(frutaAtual)
    }
}
console.log(FrutasFiltradas);


let estação = "ano todo"

for(let i = 0;i < frutas.length; i++){
    const frutaAtual = frutas[i]

    if(frutaAtual.disponibilidade_estacao.includes(estação))
        console.log(`está fruta pode ser plantada o ano todo: ${frutaAtual.nome}`)
}

let origem = "Brasil"
let nomeDaFruta 
let contador = 0

for(let i = 0; i < frutas.length; i++){
    const frutaAtual = frutas[i]

    if(frutaAtual.origem === origem){
        nomeDaFruta = frutaAtual.nome 
        contador = contador + 1;
        
    }
    console.log(`Quantidade de frutas com origem no ${origem}: ${contador} ${nomeDaFruta}`);
}


for(inicialização; condição; incremento)
let  peso = 0
let frutaMaisPesada

for(let i = 0; i < frutas.length; i++){
    const frutaAtual = frutas[i]

    if(frutaAtual.peso_gramas > peso){
        peso = frutaAtual.peso_gramas;
        frutaMaisPesada = frutaAtual;
    }

    if(frutaAtual){
        console.log(`fruta mais pesada: ${frutaMaisPesada}`)
        console.log(`peso: ${peso}`)
    }

}


let price = 2000
let frutaMaisBarata = null

for(let i = 0; i < frutas.length; i++){
    const frutaAtual = frutas[i]

    if(frutaAtual.preco_kg < price){
        price = frutaAtual.preco_kg
        frutaMaisBarata = frutaAtual
    }
    if(frutaMaisBarata){
        console.log(`fruta mais barata:${frutaMaisBarata}`)
        console.log(`preço:${price}`)
    }
}


let menorAcidez = 9999;
let frutaMenosAcida = null;

for(let i = 0; i < frutas.length ;i++){
    const frutaAtual = frutas[i];

    if (frutaAtual.acidez < menorAcidez){
        menorAcidez = frutaAtual.acidez;
        frutaMenosAcida = frutaAtual;
    }
    console.log("--- Resultado do For Loop ---");
  if (frutaMenosAcida) {
    console.log(`A menor acidez encontrada é: ${menorAcidez}`);
    console.log(`A fruta com a menor acidez é: ${frutaMenosAcida.nome}`);
  } else {
    console.log("O array de frutas está vazio.");
  }
}
  console.log("---------------------------");

  return frutaMenosAcida
}

let maisAcida = 0
let frutaMaisAcida = null

for(let i = 0; i < frutas.length; i++){
    const frutaAtual = frutas[i]

    if(frutaAtual.acidez > maisAcida){
        maisAcida = frutaAtual.acidez;
        frutaMaisAcida = frutaAtual
    }
    if(frutaMaisAcida){
        console.log(`maior acidez é, ${maisAcida}`)
        console.log(`fruta mais acida é ${frutaMaisAcida}`)
    }
}

}*/
    return (
        <div></div>
    )
}

/*
    executa até que a condição seja verdadeira 
while(){}
    repete até que a condição seja verdadeira, porem ela por obrigação vai executar uma vez 
do {
    
} while (condition);
    // repete até que a condição seja falsa
    //executa a iteração a partir de um objeto e percorre as prioridades 
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
}
    // itera sobre valores de um objeto iteravel,
for (const element of object) {}
*/