
interface cadastroProps{
  nome?: string; // opcional
  email: string;
  status: boolean;
}


const novoUsuario: cadastroProps = {
  nome: "Belarmino Sacate",
  email: "teste@teste.com",
  status: true,
}

console.log(novoUsuario);


// function novoUser({nome, email, status}: cadastroProps): void{
//   console.log('Nome: ', nome);
// }


// outra forma de descontrucao
function novoUser(propriedades: cadastroProps): void{
  console.log('Nome: ', propriedades.nome);
}

novoUser({email: "teste@teste.com", status: true});

