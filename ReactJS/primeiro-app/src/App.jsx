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

    <Oferta titulo='Nike Air Max - 50% OFF'
      valor='1.500'
      descricao='super confortaveis'
    />

    <hr />

    <Oferta titulo='Meia Adidas - 10% OFF'
      valor='25'
      descricao='meias longas'
    />
  </div>
 )
}

// componente para renderizar o nome.
// podemos passar propriedades a um elemento
// assim podemos passar como atributos para que sejam renderizados no elemento.
export function Oferta({titulo, valor, descricao}){
  return(
    //Nao da ter 2 ou mais elementos HTML sem estarem dentro de uma tag
    // usa-se divs ou fragments '<>' para agrupar os elementos.
    <>
      <h2>{titulo} Valor: {valor}</h2>
      <h3>Descricao:</h3>
      <p>
        {descricao}
      </p>
    </>
  )
}
