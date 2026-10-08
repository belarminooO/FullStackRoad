import { Link, useNavigate } from 'react-router'

export function Sobre(){

  let navigate = useNavigate();

  function navegaPagina(){
    navigate('/contactos')
  }

  return(
    <div>
      <h1>Bem vindo a pagina sobre</h1>
      <p>sobre a empresa 123123 aqui vai toda a descricao</p>

    {/* navegacao por link */}
      <br />
      <Link to='/'>
        Ir para home
      </Link>
      <br />

      {/* Navegacao por accao */}
      <button onClick={navegaPagina}>
        Ir para a pagina Contactos
      </button>
    </div>
  )
}
