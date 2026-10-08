import { Link } from 'react-router'

export function Home(){
  return(
    <div>
      <h1>Bem vindo a pagina home do site</h1>
      <Link to='/contactos'>
        Ir para contactos
      </Link>
      <br />
      <Link to='sobre'>
        ir para Sobre
      </Link>
    </div>
  )
}
