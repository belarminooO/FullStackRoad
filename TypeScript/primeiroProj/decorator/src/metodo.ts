//Decorator em metodos > So E chamado quando o nosso metodo E chamado, diferente do decorator em classes.
import { verificaPessoa } from "./decorators/verificaPessoa"

class Pessoa{
  nome: string;

  constructor(nome: string){
    this.nome = nome;
  }

  @verificaPessoa(26)
  cadastrarPessoa(){
    console.log(`Bem vindo ${this.nome} ao sistema`);
  }
}


const pessoa1 = new Pessoa("Belarmino Sacate");

pessoa1.cadastrarPessoa();
