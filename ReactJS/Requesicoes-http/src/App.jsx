import {useState, useEffect} from 'react';
import './style.css'

export default function App(){

  const [nutri, setNutri] = useState([])

  useEffect(() => {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

      fetch(url)
      .then( (result) => result.json())
      .then( data => {
        console.log(data)
        setNutri(data)
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

      {nutri.map((item, index) => (
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
