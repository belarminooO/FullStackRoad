//private so pode ser acessado ou modificado na sua propria classe, nao fora nem na classe que extende.


class Conta{
  private limite: number = 450;

  private aumentarLimite(quantidade: number){
    if(quantidade < 1000){
      this.limite = quantidade;
      console.log(`Agora seu limite E: ${this.limite}`)
    }else{
      console.log(`Infelizmente o seu limite foi reprovado`)
    }
  }

  solicitarLimite(quantidade: number){
    return this.aumentarLimite(quantidade);
  }

  solicitarLimiteApp(estaAutenticado: boolean, quantidade: number): void | boolean{
    if(estaAutenticado){
      this.aumentarLimite(quantidade);
    }else{
      return false
    }
  }
}


class BancoAfiliado extends Conta{

  limiteAfiliado(){
    return this.solicitarLimite(150);
  }
}


const fulano = new Conta()
//isto nao E possivel fazer.
// fulano.limite = 100
// aumentarLminite(100)
// solicitarLimite(100);
fulano.solicitarLimiteApp(true, 700); // agora sim podemos acessar...

console.log("=================================")

// console.log(fulano)

const joao = new BancoAfiliado();
joao.limiteAfiliado();
console.log(joao)
