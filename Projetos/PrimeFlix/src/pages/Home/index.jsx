import { useEffect, useState } from "react"
import { obterTmdb, temAcessoAoTmdb } from '../../services/api'
import { Link } from 'react-router'
import './home.css'

export default function Home (){
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(()=>{
    async function loadFilmes(){
      if (!temAcessoAoTmdb) {
        setErro(true);
        setLoading(false);
        return;
      }

      try {
        const response = await obterTmdb('movie/now_playing', {
          params:{
            language: 'pt-BR',
            page: 1,
          }
        })

        setFilmes(response.data.results.slice(0, 10));
      } catch {
        setErro(true);
      } finally {
        setLoading(false);
      }
    }

    loadFilmes();
  }, [])

  if(loading){
    return(
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  if(erro){
    return(
      <div className="loading">
        <h2>Não foi possível carregar os filmes.</h2>
        <p>Confirma a configuração da API do TMDB e tenta novamente.</p>
      </div>
    )
  }

  return(
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

