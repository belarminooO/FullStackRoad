

// Tipo desconhecido - quando vc nao sabe o tipo que vai receber

let total: unknown;

total = 10;

total = '120'

total = {
  total: 100,
}

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido;

// valor do tipo unknown so pode ser atribuido ao tipo unknown ou any.
let totalEntrega: unknown = totalPedido;

console.log(totalEntrega);
