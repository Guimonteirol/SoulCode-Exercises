import homePage from "./moduloInterface.js";

document.getElementById(
  "filtroProdutos"
).innerHTML = homePage.filtrarProdutos();
homePage.montaListagem();
homePage.exibirOpcoes();
document.body.className = "corpoGeral";
document.getElementById("listaProdutos").innerHTML = `<h1>${
  homePage.titulo
}</h1>
${homePage.montaListagem()}
<p>Estes elementos são de um vetor estruturado em obejtos, de 
nome produto.</p>`;
document.getElementById("categoria").innerHTML = homePage.exibirOpcoes();