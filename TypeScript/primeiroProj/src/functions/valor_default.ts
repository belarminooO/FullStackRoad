

// como deixar um valor por default ou deixar ele opcional

function cadastro(email: string, senha:string, nome = 'Aluno', idade?: number): void{
  let data = {email, senha, nome};

  console.log(data);
}

//cadastro('teste@teste.com', '123453');
//cadastro('teste@teste.com', '123453', 'Belarmino');
cadastro('teste@teste.com', '123453', 'Belarmino', 21);


function cadastroLoja(nome: string, email: string, status = false): boolean{
  console.log('Status atual da loja: ', status);
  return status;
}

cadastroLoja('Burguer K', 'Teste@Teste.com', true)
