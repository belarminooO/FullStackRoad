

interface novoProduto<V extends number>{
  nome: string;
  preco: V;


  formatar(valor: V):string;
}


// type novoProduto<V> = {
//   nome: string;
//   preco: V;
// }

const arroz: novoProduto<number> = {
  nome: "Arroz Branco",
  preco: 1500,

  formatar(valor: number): string{

    let valorFormatado = valor.toLocaleString("pt-PT",
      {
        style: "currency",
        currency: "EUR"
      }
    )

    return valorFormatado
  }
}

console.log(arroz)

console.log(arroz.formatar(1500));
