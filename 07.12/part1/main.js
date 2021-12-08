// Fonte da dados para construção das manipulações de estrutura.
const produtos = [
    { id: 10, nome: "feijão", valor: 8.0, categoria: "alimentos" }, //Objeto
    { id: 11, nome: "arroz", valor: 9.0, categoria: "alimentos" }, //baseado em
    { id: 12, nome: "milho", valor: 3.5, categoria: "alimentos" }, //Prdutos com
    { id: 13, nome: "creme dental", valor: 2.85, categoria: "higiene" }, //Estrutura de
    { id: 14, nome: "sabonete", valor: 1.95, categoria: "higiene" } //etiquetas de caracteristica
  ];
  //Adição de itens no vetor baseado em cortes pelo indice.
  /*O SPLICE ADICIONA UM ELEMENTO NA POSIÇÃO QUE EU ESCOLHER*/
  produtos.splice(
    5,
    0,
    {
      id: 15,
      nome: "shampoo",
      valor: 21.0,
      categoria: "higiene"
    },
    {
      id: 16,
      nome: "condicionador",
      valor: 17.0,
      categoria: "higiene"
    }
  );

  /*FUNÇÃO MAP*/
  // Exemplo de manipulação de mapas partindo da estrutura de vetor.
  //const nomes = produtos.map((produtos) => produtos.nome);
  //console.log("Nome dos Produtos: ", nomes);

  // Exemplo para percorrer vetores.
  
  produtos.forEach((produtos, index) => {
    console.log(
      `${index}) ${produtos.nome}: [${(produtos.valor * imposto).toFixed(2)}]`);
  });

  // Exemplo de filtragem em fonte de vetor.
  /****var imposto = 1.023;
  var impostoAlimentos = 1.003;
  const alimentos = produtos
    .filter((produtos) => produtos.categoria === "alimentos")
    .map((alimentos) => (alimentos.valor * impostoAlimentos).toFixed(2));
  console.log(alimentos);
  const higiene = produtos
    .filter((produtos) => produtos.categoria === "higiene")
    .map((higiene) => (higiene.valor * imposto).toFixed(2));
  console.log(higiene);
  */
  /*
  const higiene = produtos.filter((produtos) => produtos.categoria === "higiene");
  const alimentos = produtos.filter(
    (produtos) => produtos.categoria === "alimentos"
  );
  console.log("Imposto Sobre Higiene: ");
  higiene.forEach((higiene, index) => {
    console.log(
      `${index}) ${higiene.nome}: [${(higiene.valor * imposto).toFixed(2)}]`
    );
  });
  console.log("Imposto Sobre Alimentos: ");
  alimentos.forEach((alimentos, index) => {
    console.log(
      `${index}) ${alimentos.nome}: [${(
        alimentos.valor * impostoAlimentos
      ).toFixed(2)}]`
    );
  });
  
  // Exemplo de acumuladores aritméticos para estruturas de vetores.
  const somaValores = produtos.reduce(
    (acumulo, produtos) => acumulo + produtos.valor,
    0
  );
  */
  