import { useParams } from "react-router"

export function Avaliacao (){

  const {id} = useParams();

  return(
    <div>
      <h3>Avaliacao do produto</h3>
      <p>Este produto esta com 5 estrelas de avalicao</p>
      <p>Id da avaliacao: {id}</p>
    </div>
  )
}
