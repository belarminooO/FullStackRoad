import { useParams } from "react-router"

export function Produto (){

  //acedendo ao id passado na rota, ex: http://localhost:5173/produto/123123
  const {id} = useParams(); //id E o parametro dado la em Route do routes.jsx: path="/produto/:id"

  return(
    <div>
      <h1>Detalhe do produto: {id}</h1>
    </div>
  )
}
