 /*FUNÇÕES INERENTES - FUNÇÕES JÁ EXISTENTES*/

const produtos = [
    { id: 1, nome: "feijão", valor: 8.0, categoria: "alimentos" },
    { id: 2, nome: "arroz", valor: 9.0, categoria: "alimentos" },
    { id: 3, nome: "milho", valor: 3.5, categoria: "alimentos" },
    { id: 4, nome: "creme dental", valor: 2.85, categoria: "higiene" },
    { id: 5, nome: "sabonete", valor: 1.95, categoria: "higiene" }
  ];
  produtos.splice(
    6,
    0,
    {id:6, nome: "shampoo", valo: 21, categoria:"higiene" }
  ); /*COLOCA NA POS | RETIRAR FATORES | O QUE SERÁ ADD*/
  console.log("Nome dos Produtos: ", produtos);

  const nomes = produtos.map((produtos)=>produtos.nome);
  console.log("Nome dos Produtos: ", nomes);
