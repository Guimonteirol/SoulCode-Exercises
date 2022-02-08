1)[07/02]
 Crie um esquema de rotas GET para adicionar e visualizar produtos, deve apresentar as seguintes rotas:
/produtos (GET): Exibe todos os produtos no array.
/produtos/:index (GET): Exibir o produto no index, caso não exista use código 404.
/produtos/adicionar (GET): Formulário para adicionar dados via GET na action /produtos/enviar.
/produtos/enviar (GET): Recebe os dados via req.query e adiciona no array. Exibe o produto adicionado.
