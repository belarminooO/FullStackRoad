
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
