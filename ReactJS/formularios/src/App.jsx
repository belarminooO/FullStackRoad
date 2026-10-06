
import { useState } from 'react';

export default function App(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({
    nome: '',
    email: '',
    idade: ''
  })

  function cadastar(event){
    event.preventDefault(); // para que a página não seja recarregada.

    if(idade < 18){
      alert('Você não possivel cadastrar uma pessoa menor de idade!')
      return;
    }

    setUser({
      nome: nome,
      email: email,
      idade: idade
    })

    alert('TESTE')
  }
return(
  <div>
    <h1>Formulario de Cadastro</h1>


    <form onSubmit={cadastar}>
      <label>Nome completo: </label>
        <input value={nome} onChange={(event) => setNome(event.target.value)} type="text" placeholder="Digite seu nome completo"></input>
        <br/>

      <label>Email: </label>
        <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Digite seu email"></input>
        <br/>

      <label>Idade: </label>
        <input value={idade} onChange={(event) => setIdade(event.target.value)} type="text" placeholder="Digite sua idade"></input>
        <br/>

        <button type="submit">Cadastrar</button>
    </form>

    <br/>
    <hr/>

    {user.nome && (
      <>
        <h3>Usuario cadastrado</h3>
        <b>Nome: {user.nome}</b><br/>
        <b>Email: {user.email}</b><br/>
        <b>Idade: {user.idade}</b><br/>
      </>
    )}
  </div>
 )
}
