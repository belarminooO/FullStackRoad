
export default function App(){
  return(
    <div>
      <h1>Meu projeto</h1>
      <Aluno nome="Belarmino Sacate" idade={21}/>
      <Aluno nome="He wanna pay full price" idade={67}/>
    </div>
  )
}

// interface para tipagem das propriedades do aluno(nome e idade).
interface AlunoProps{
  nome: string;
  idade: number;
}

// componente Aluno que recebe nome e idade como propriedades e coloca-os em uma div.
function Aluno({nome, idade}: AlunoProps) {
  return(
    <div>
      <h1>Aluno: {nome}</h1>
      <h1>Idade: {idade}</h1>
    </div>
  )
}
