/*criando um componente com formato de funcao com o nome App.
* export - indica que estamos a epxortar essa funcao, para que possa ser chamada em outros lugares ex:main.jsx
* default - implica que o import da funcao pode ser feita de maneira direta:
* import App from './App.jsx' - neste caso esta de forma direta. Caso contrario seria necessario ser feito com chavetas {App}, pois nao teriamos o default
* NB: SO PODE EXISTIR 1 EXPORT DEFAULT POR ARQUIVO.
*
* -> JSX < Mistura do HTML / XML
*/


//Componente Principal
export default function App(){
 return(
  <div>
    <h1>Primeiro Projecto</h1>
    {/* para renderizar uma funcao/elemento precisamos usa-se tag com o nome da mesma. */}

    <Nome/>

    <Nome/>
  </div>
 )
}

// componente para renderizar o nome.
export function Nome(){
  return(
    <h2>Ola Belarmino Sacate!</h2>
  )
}
