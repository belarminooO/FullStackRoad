/*
  Generics
  Permite criar estruturas que serao adaptaveis a varios tipos de dados.
  (ajudando a reaproveitar melhor o nosso codigo e deixa-lo mais flexivel.)

  podemos usar em:
  funcoes | interfaces / type | classes
*/

/*
 Alguns padroes:
 S => state;
 T => Type;
 K => Key;
 V => Value;
 E => Element;
*/

function repositorio<T extends string | number>(){ // podemos Tipar diretamente atraves do extends, NOTA: especificando diretamente aqui forca com que ao criar um repositorio a tipagem do generic siga a dipagem aqui atribuida. aceitando so string ou number no caso.
  let dados: T;

  function getDados(){
    return dados;
  }

  function setDados(novoDado: T){
    dados = novoDado;
  }

  return { getDados, setDados}
}

const repo1 = repositorio<string | number>();

repo1.setDados("15");

console.log(repo1.getDados());

console.log("============================");

const repo2 = repositorio<string>();

repo2.setDados("21");

console.log(repo2.getDados());
