import { useState } from 'react'

export default function App(){

  const [input, setInput] = useState("")
  const [aluno, setAluno] = useState("Sem nenhum nome")
  const [idade, setIdade] = useState("")

  function mostrarAluno(){
    console.log(idade);
    setAluno(input);
  }

  return(
    <div>
      <h1>Conhecendo useState</h1>

      <input type="text" placeholder="Digite o seu nome" value={input} onChange={ (e) => setInput(e.target.value) }/>
      <br />
      <br />
      <input type="text" placeholder="Digite a sua idade" value={idade} onChange={ (e) => setIdade(e.target.value) }/>

      <br />
      <br />

      <button onClick={mostrarAluno}>Mostrar Aluno</button>

      <hr />

      <h3>Bem vindo: {aluno}</h3>
    </div>
  )
}
