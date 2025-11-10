

export default function revisão (){
const frutas = [
    {
      nome: "Maçã Gala",
      cor: "vermelha",
      peso_gramas: 180,
      origem: "Chile",
      disponibilidade_estacao: ["outono", "inverno"],
      acidez: 0.3,
      preco_kg: 7.50
    },
    {
      nome: "Banana Prata",
      cor: "amarela",
      peso_gramas: 100,
      origem: "Brasil",
      disponibilidade_estacao: ["ano todo"],
      acidez: 0.1,
      preco_kg: 5.00
    },
    {
      nome: "Manga Tommy",
      cor: "laranja",
      peso_gramas: 350,
      origem: "Brasil",
      disponibilidade_estacao: ["verão", "outono"],
      acidez: 0.2,
      preco_kg: 12.00
    },
    {
      nome: "Morango",
      cor: "vermelha",
      peso_gramas: 15,
      origem: "Argentina",
      disponibilidade_estacao: ["primavera", "verão"],
      acidez: 0.7,
      preco_kg: 25.00
    },
    {
      nome: "Abacaxi Pérola",
      cor: "amarela",
      peso_gramas: 1200,
      origem: "Costa Rica",
      disponibilidade_estacao: ["ano todo"],
      acidez: 0.9,
      preco_kg: 8.90
    },
    {
      nome: "Limão Tahiti",
      cor: "verde",
      peso_gramas: 50,
      origem: "México",
      disponibilidade_estacao: ["ano todo"],
      acidez: 1.0,
      preco_kg: 4.00
    },
    {
      nome: "Uva Crimson",
      cor: "vermelha",
      peso_gramas: 5, // Peso individual
      origem: "Peru",
      disponibilidade_estacao: ["verão"],
      acidez: 0.4,
      preco_kg: 18.00
    },
    {
      nome: "Pera Williams",
      cor: "verde",
      peso_gramas: 220,
      origem: "Portugal",
      disponibilidade_estacao: ["inverno", "primavera"],
      acidez: 0.25,
      preco_kg: 10.50
    }
  ];
//forma de acessar um arry 
frutas[2]
// Notação de ponto de um array de obj, tenho que acessar primeiro o array e depois o objeto. Com notação de ponto tbm posso acessar métodos 
frutas[0].preco_kg
//Retorna a quantidade de itens dentro de um array 
frutas.length
// cria um array com os nome separado pelo espaço 
frutas[2].nome.split(" ")
//adiciona um item ao fim do array
frutas.push({nome:"pepino", cor: "verde", peso_gramas: 250, origem: "brasil", disponibilidade_estacao: ["ano todo"], acidez: 0.21 ,preco_kg:7.3 })
//Remove o ultimo item do array
frutas.pop()
// serve para adicionar no primeiro lugar do array 
frutas.unshift({nome:"pepino", cor: "verde", peso_gramas: 250, origem: "brasil", disponibilidade_estacao: ["ano todo"], acidez: 0.21 ,preco_kg:7.3})
//remove o primeiro item do array
frutas.shift()
// remove os items a partir do indice inicial até o final
frutas.splice(8)
//verifica se ha determinado item no array e retorna verdadeiro ou falso
frutas.includes({nome:"pepino", cor: "verde", peso_gramas: 250, origem: "brasil", disponibilidade_estacao: ["ano todo"], acidez: 0.21 ,preco_kg:7.3})
//chama a função callback e recebida por parametro para cada elemento do array original , constroi um novo array com base nos retornos de cada chamada.
frutas.map((fruta)=>{
  fruta.nome.toLocaleLowerCase() //posso passar qualquer função, porem primeiro tenho que selecionar onde tem que ser aplicado 
  fruta.preco_kg.toLocaleString()
})
//cria um novo array com todos os elemento que passarma na condição 
frutas.filter((fruta)=>fruta.preco_kg < 8)
//retorna o indice no array do primeiro elemento que satisfizer a condição 
frutas.findIndex((aleatorio)=> aleatorio.peso_gramas <= 0,15)
// retorna o valor do primeiro elemento do array que satisfizer a condição, caso contrario undefined
frutas.find((fruta)=> fruta.nome === "Morango")
//Testa se todos os elementos do array passam na condição e retorna um valor boolean, se apenas um não atender retorna falso 
frutas.every((fruta)=>fruta.preco_kg > 4)
//Testa se ao menos um dos elementos do array passa na condição e retona true o false 
frutas.some((fruta)=>fruta.peso_gramas > 0.15)
//ordena os elementos do array seja em ordem alfabetica, numerica ou qualquer criterio personalizado, ele altera o array original. porem vc altera isso se passar o rest operator, pq ele cria um novo array 
const frutasOrdenadasPorPreço = [... frutas].sort((a,b)=>{return a.preco_kg - b.preco_kg})
//console.log(frutasOrdenadasPorPreço.map(f => `${f.nome}: R$ ${f.preco_kg}`));
//Executa uma função de callback em cada elemento do array ele altera os item do array original 
frutas.forEach((fruta)=> fruta.peso_gramas)



return (
    <div>
      <h1>Lista de Frutas</h1>
      <ul className=" justify-center">
        {frutas.map((fruta, index) => (
          <li key={index}>
            **{fruta.nome}** 
            (Cor: {fruta.cor}) 
            (peso_gramas: {fruta.peso_gramas}) 
            (origem {fruta.origem})
            (disponibilidade {fruta.disponibilidade_estacao}) 
            (acidez {fruta.acidez}) 
            - R$ {fruta.preco_kg.toFixed(2)}/kg
          </li>
        ))}
      </ul>
    </div>
)
}

