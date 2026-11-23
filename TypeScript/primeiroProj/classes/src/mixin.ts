import { applyMixins } from './mixin/applyMixin'

// mixin permite nos extender de 2 classes em simultaneo, clamando a interface que extende das mesmas,
// passando tambem as classes num array.


class Automovel {
  ligar(): void{
    console.log("AUTOMOVEL LIGADO COM SUCESSO!")
  }

  desligar(): void{
    console.log("AUTOMOVEL DESLIGADO COM SUCESSO!")
  }
}

class Especificacao{
  descricao: string;

  constructor(descricao: string){
    this.descricao = descricao;
  }
}


class Carro{
  nome: string;

  constructor(nome: string){
    this.nome = nome;
  }
}


interface Carro extends Automovel, Especificacao{

}

applyMixins(Carro, [Automovel, Especificacao])

const gol = new Carro("Gol 1.6");

gol.ligar();

gol.descricao = "Modelo completo automatico";

console.log(gol);

gol.desligar();
