
function produtoComDesconto(valor, percentualDesconto) {
    const valorDescontado = (percentualDesconto / 100) * valor;
    return valor - valorDescontado;
}

 console.log(produtoComDesconto(100,10));
 console.log(produtoComDesconto(100,23));