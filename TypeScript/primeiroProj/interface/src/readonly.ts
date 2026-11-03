

interface ProdutoProps{
  readonly id: string;
  nome: string;
  descricao: string;
}

let produto1: ProdutoProps = {
  id: "1",
  nome: "AirForces",
  descricao: "Black"
}

// nao E possivel alterar uma propriedade readonly.
//produto1.id = "123"

produto1.nome = "ADIDAS SAMBA";


console.log(produto1)
