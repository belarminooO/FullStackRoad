import { useState, type SubmitEvent } from 'react'
import LogoImg from './assets/logo.png'
import './App.css'


/*
  Calculo: alcool / gasolina
  Se o resultado for menor que 0.7 compensa usar alcool.
*/


interface infoProps{
  title: string;
  gasolina: string | number,
  alcool: string | number
}

export default function App() {

  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState(0)
  const [info, setInfo] = useState<infoProps>()

  function calcular(event: SubmitEvent){
    event.preventDefault(); // serve apra previnir com que pagina de refresh apos o submit.

    const calculo = (alcoolInput / gasolinaInput)
    console.log(calculo);

    if(calculo <= 0.7){
      setInfo({
        title: "Compensa usar alcool",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    }else{
      setInfo({
        title: "Compensa usar gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    }
  }

  function formatarMoeda(valor: number){
    const valorFormatado = valor.toLocaleString("pt-PT",
      {
        style: "currency",
        currency: "EUR"
      }
    )
    return valorFormatado;
  }

  return (
    <div>
      <main className='container'>
        <img
        className='logo'
        src={LogoImg}
        alt="Logo da gasolina ou alcool"
        />
        <h1 className='title'>Qual a melhor opcao?</h1>

        <form className='form' onSubmit={calcular}>
          <label>Alcool (preço por litro)</label>
          <input
          className='input'
          type='number'
          placeholder='4,90'
          min="1"
          step="0.01"
          required
          value={alcoolInput}
          onChange={ (e) => setAlcoolInput(Number(e.target.value)) }
          />

          <label>Gasolina (preço por litro)</label>
          <input
          className='input'
          type='number'
          placeholder='4,90'
          min="1"
          step="0.01"
          required
          value={gasolinaInput}
          onChange={ (e) => setGasolinaInput(Number(e.target.value)) }
          />

          <input className='button' type="submit" value="Calcular"/>
        </form>

        {/*
          renderizacao condicional para mostrar o resultado
          o resultado so E mostrado depois de termos feito o calculo
          entao para verrificar se o objecto "info" esta ou nao vazio.
        */}

        {info && Object.keys(info).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>{info.title}</h2>

            <span>Alcool {info.alcool}</span>
            <span>Gasolina {info.gasolina}</span>
          </section>
        )}
      </main>
    </div>
  )
}
