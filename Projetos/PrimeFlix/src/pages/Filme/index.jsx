import { useEffect, useState } from 'react'
import { useParams } from "react-router"
import api from '../../services/api'

export default function Filme (){

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams() ;

  useEffect(()=>{

    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params:{
          api_key:'2e426b8b9c4a4f7860c031c915554e23',
          language: 'pt-BR',
        }
      })
      .then((response)=>{
        // console.log(response.data)
        setFilme(response.data);
        setLoading(false);

      })
      .catch(()=>{
        // console.log("FILME NAO ENCONTRADO")
      })

    }

    loadFilme();

    return() =>{
      console.log("COMPONENTE DESMONTADO")
    }

  }, [])

  if(loading){
    return(
      <div className='filme-info'>
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return(
    <div className='filme-info'>
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliacao: {filme.vote_average} / 10</strong>
    </div>
  )
}

