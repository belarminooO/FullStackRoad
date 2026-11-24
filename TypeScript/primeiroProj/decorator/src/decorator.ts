
/*
 DECORATORS
  Class
  Propriedades
  Metodos
  Parametros ( BEM POUCO USADO )
  GETTERS / SETTERS ( BEM POUCO USADO )
*/


// target = recebe o contrutor da nossa classe.
// function logInfo(target: any){
//   console.log("Sistema esta online!");
// }

// Padrao factory -> funcao que vai retornar a criacao do decorator
function logInfo(mensagem: string){
  return (target: any) => {
    console.log(`${mensagem}, ${target}`);
  }
}

@logInfo("Servidor esta rodando!")
class Sistema{

}


// ==========================PRATICANDO===============================

function setIpServidor(novoIp: string){

  return (target: any) => { // o target E o contrutor da classe
    return class extends target{
      ip = novoIp
    }
  }
}

@setIpServidor("192.123.50.12")
class Servidor{

}

const servidor1 = new Servidor();

console.log(servidor1)
