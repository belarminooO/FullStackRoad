import { Link } from 'react-router'


export function Contactos(){
  return(
    <div>
      <h1>Bem vindo a pagina contactos</h1>
      <h3>Telefone: (xx) 123142342</h3>

      <br />
      <Link to='/'>
        Ir para home
      </Link>
      <br />
      <Link to='/sobre'>
        ir para Sobre
      </Link>
    </div>
  )
}
