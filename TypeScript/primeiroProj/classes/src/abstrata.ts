
type DadosConta = {
  nome: string;
  numero: string;
  endereco: string;
}

abstract class ContaBanco{

abstract abrirConta(dados: DadosConta): boolean; // indica-se a tipagem dos parametros e retorno.

}

/*
uma classe abstrata serve como um modelo a ser seguido por outras classes, nao pode ser instanciada diretamente.
const conta1 = new ContaBanco
*/

class PessoaFisica extends ContaBanco{

  // no caso precisamos seguir o que foi especificado na classe abstrata
  abrirConta(dados: DadosConta): boolean {
  console.log("=========")
  console.log(`Nova conta P.fisica criada com sucesso! ${dados.nome}`)
  console.log("=========")

  return true;
  }
}

const joana = new PessoaFisica();

joana.abrirConta({
  nome: "joana tavares",
  numero: "93213443",
  endereco: "Rua test"
})
