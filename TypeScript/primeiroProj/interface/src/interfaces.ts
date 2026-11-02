

// let loja: object;

// loja = {
//   nome: "Bk",
//   endereco: "Rua 1",
//   status: true
// }


// a interface Define a estrutura a ser seguuida por um objeto,
// ou seja, define quais propriedades o objeto deve ter e quais tipos de
// dados essas propriedades devem conter.

interface LojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerKing: LojaProps = {
  nome: "Burguer King",
  endereco: "Rua 1",
  status: true,
}

//console.log(BurguerKing);

function novaLoja({nome, endereco, status}: LojaProps): void{
  console.log(`Loja ${nome} criada com sucesso!`)
  console.log(`Endereco da loja: ${endereco}`)
  console.log(`Status da loja: ${endereco}`)

  console.log("=============")
}

novaLoja({nome: "Mc Donalds", endereco: "Rua 2", status: true});

novaLoja({nome: "Burguer K", endereco: "Rua 3", status: true});
