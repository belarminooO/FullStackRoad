

class Pesssoa{
  readonly id: string = "213" // pdoe ser acessado dentro e foora, mas nao pode ser alterado. (NOTA: So serve para atributos e nao para metodos)
  nome: string;
  idade: number;


  constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;
  }

  mostraId(){
    // this.id = "2131231"; // id nao pode ser alterado por ser readonly.
    console.log(`ID DO USUARIO: ${this.id}`)
  }
}


const ana = new Pesssoa("Ana paula", 21);

console.log(`ID DA ANA ${ana.id}`)

// console.log(ana);
