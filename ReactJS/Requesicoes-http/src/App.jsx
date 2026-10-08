import {useState, useEffect} from 'react';
import './style.css'

export default function App(){

  const [nutri, setNutri] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

      fetch(url)
      .then( (result) => result.json())
      .then( data => {
        console.log(data)
        setNutri(data)
        setLoading(false)
      })
      .catch((e) => console.log(e))
    }

    loadApi();

  }, [])

  return(
    <div className='container'>
      <header>
        <strong> React Nutri </strong>
      </header>

      {loading && <p>Carregando dados...</p> }

      {!loading && nutri.map((item, index) => (
        <article key={index} className='post'>

          <strong>{item.titulo}</strong>
          <img src={item.capa} alt={item.capa} className='capa' />
          <p>{item.subtitulo}</p>
          <a className='botao'> Acessar </a>

        </article>
      ))}
    </div>
  )
}
