/*criando um componente com formato de funcao com o nome App.
* export - indica que estamos a epxortar essa funcao, para que possa ser chamada em outros lugares ex:main.jsx
* default - implica que o import da funcao pode ser feita de maneira direta:
* import App from './App.jsx' - neste caso esta de forma direta. Caso contrario seria necessario ser feito com chavetas {App}, pois nao teriamos o default
* NB: SO PODE EXISTIR 1 EXPORT DEFAULT POR ARQUIVO.
*/

import { Oferta } from './Oferta' // com '{}' pois o export E sem default.

//useState permite que uma variavel possa mudar sem que a pagina seja atualizada
import  {useState} from 'react'

//Componente Principal
export default function App(){

  //cupom = nome da propriedade, usado para acessar o valor do estado.
  // setCupom = usado para trocar o estado da variavel
  // ('') = conteudo que sera mostrado por defeito
  const [cupom, setCupom] = useState('PR10OFF')

  function resgataCupom(){
    setCupom('CUPOM RESGATADO!') // troca o estado da propriedade cupom...
  }

 return(
  <div>
    <h1>Ofertas Online</h1>

    <h4>Cupom primeira compra: {cupom}</h4>

    <button onClick={resgataCupom}>
      Resgatar cupom
    </button>

    <hr />
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
