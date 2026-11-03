

interface CursoProps{
  id: string;
  nome: string;
  preco: number;

  //definir apenas a funcao e o que ela deve receber e retornar
  promocao: (preco: number) => void;
}

function mostraPromocao(preco: number){
  console.log(`Promoção do curso por apenas R$ ${preco}`);
}

const novoCurso: CursoProps = {
  id: "1",
  nome: "Curso de TypeScript",
  preco: 100,

  //promocao: mostraPromocao,

  //podemos passar uma funcao anonima diretamente nao dependendo de uma funcao externa.
  promocao: (preco: number): void => {
    console.log(`Promoção do curso por apenas R$ ${preco}`);
  }
}

console.log(novoCurso);

console.log(novoCurso.promocao(340));


//Exemplo 2
console.log("=====================");

interface SomaProps{
  (valor1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number =>{
  console.log("RESULTADO: ", valor1 + valor2);

  return valor1 + valor2;
}

const resultado = somaNumeros(15, 10);

console.log(resultado)
