
// Type alias permite criar tipos mais poderosos, com mais informacoes do que tipos primitivos.


type Info = {
  id: number;
  nome: string;
  descricao?: string;
}

const produtoInfo: Info = {
  id: 123,
  nome: "placa de video",
  //descricao: "RTX5090"
}

type Categoria = {
  slug: string;
  quantidadeProduto: number;
}

const categoria1: Categoria = {
  slug: "hardware",
  quantidadeProduto: 2
}

console.log(categoria1);


/*
unindo os 2 type alias
essa juncao (&) E bem parecida com o "extends" usado em juncao de interfaces.
*/
type ProdutoInfo = Info & Categoria // ProdutoInfo E a intercessao (UNIAO) entre info e categoria

const novoProduto: ProdutoInfo = {
  id: 213213,
  nome: "Teclado RGB",
  slug: "Teclado mecanico",
  quantidadeProduto: 10
}

console.log(novoProduto);
