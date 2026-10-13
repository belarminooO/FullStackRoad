
import { useParams } from 'react-router'

export function Descricao (){
  const { id } = useParams();

  return(
    <div>
      <h3>Descricao do produto</h3>
      <p>Detalhes e especificacoes deste produto.</p>
    </div>
  )
}


