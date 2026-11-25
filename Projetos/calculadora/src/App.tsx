import { useState } from 'react'
import LogoImg from './assets/logo.png'
import './App.css'

function App() {

  return (
    <div>
      <main className='container'>
        <img className='logo' src={LogoImg} alt="Logo da gasolina ou alcool" />
        <h1 className='title'>Qual a melhor opcao?</h1>

        <form className='form'>
          <label>Alcool (preço por litro)</label>
          <input className='input' type='number' placeholder='4,90' min="1" step="0.01" required />

          <label>Gasolina (preço por litro)</label>
          <input className='input' type='number' placeholder='4,90' min="1" step="0.01" required />

          <input className='button' type="submit" value="Calcular"/>
        </form>
      </main>
    </div>
  )
}

export default App
