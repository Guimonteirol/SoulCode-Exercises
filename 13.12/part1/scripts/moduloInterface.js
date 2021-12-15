import produtos from "./moduloDados.js";

class PaginaModelo {
  constructor(titulo, corpo) {
    this.titulo = titulo;
    this.corpo = corpo;
  }
  montaListagem() {
    let corpo = "";
    corpo += "<ol>";
    produtos.forEach((moduloProdutos, index) => {
      let corItem = "";
      if (index % 2 === 0) {
        corItem = "itemAzul";
      } else {
        corItem = "itemClaro";
      }
      corpo += `<li class="${corItem}">${
        moduloProdutos.nome
      } | Preço: ${moduloProdutos.valor.toFixed(2)} | Taxado: 
      ${this.calcularImposto(0.023, moduloProdutos.valor).toFixed(2)}
      | [${moduloProdutos.categoria}] | </li>`;
    });
    corpo += "</ol>";
    return corpo;
  }
  calcularImposto(taxa, valor) {
    return valor * (taxa + 1);
  }
  exibirOpcoes() {
    let htmlOpcoes = "";
    const categorias = produtos.map((produtos) => produtos.categoria);
    const seletorCategoria = [...new Set(categorias)];
    seletorCategoria.forEach((seletorCategoria, index) => {
      htmlOpcoes += `<option value="${seletorCategoria}">
      ${seletorCategoria.toLocaleUpperCase()} | ${index + 1}</option>`;
    });
    return htmlOpcoes;
  }
  filtrarProdutos() {
    let categoria = "alimentos",
      nome = "arroz",
      valor = "",
      filtroHtml = "";

    const filtroProdutos = produtos
      .filter((produtos) => produtos.nome === nome)
      .filter((filtroProdutos) => filtroProdutos.categoria === categoria);
    filtroHtml += `<ol>`;
    filtroProdutos.forEach((filtroProdutos, index) => {
      let corItem = "";
      if (index % 2 === 0) {
        corItem = "itemAzul";
      } else {
        corItem = "itemClaro";
      }
      filtroHtml += `<li class="${corItem}">
      ${filtroProdutos.nome} | Preço: ${filtroProdutos.valor.toFixed(
        2
      )} | Taxado: ${this.calcularImposto(0.023, filtroProdutos.valor).toFixed(
        2
      )} | [${filtroProdutos.categoria}] </li>`;
    });
    filtroHtml += `</ol>`;
    return filtroHtml;
  }
}
const homePage = new PaginaModelo("Enviado via Parâmetro", "");

export default homePage;
