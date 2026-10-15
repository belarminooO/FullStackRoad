import { db } from './fireBaseConection'
import { doc, setDoc, collection, addDoc, getDoc } from 'firebase/firestore'
import { useState } from 'react'
import './app.css'


function App() {

  const[titulo, setTitulo] = useState('')
  const[autor, setAutor] = useState('')


  async function handleAdd(){

  // setDoc - Tem de se especificar o id do doc a ser criado
  //   await setDoc(doc(db, 'posts', '12345'),{
  //     titulo: titulo,
  //     autor: autor,
  //   }
  // ).then(()=>{
  //   console.log('DADOS REGISTADOS NO BANCO!')
  // })
  // .catch((error)=>{
  //   console.log('ERRO ' + error)
  // })

  // addDoc - gera por si so um autoid para o doc
  await addDoc(collection(db, 'posts'),{
    titulo: titulo,
    autor: autor,
  })
  .then(()=>{
    console.log('DADOS REGISTADOS NO BANCO')

    //limpando os campos apos insercao...
    setTitulo('')
    setAutor('')
  })
  .catch((error)=>{
    console.log('ERRO ' + error)
  })
  }

  async function buscarPost(){
    const postRef = doc(db, 'posts', '12345')

    await getDoc(postRef)
    .then((snapshot)=>{
      setTitulo(snapshot.data().titulo)
      setAutor(snapshot.data().autor)
    })
    .catch(()=>{
      console.log('ERRO AO BUSCAR')
    })
  }

  return (
    <div>
      <h1>ReactjS + Firebase</h1>

      <div className='container'>

        {/* campo titulo */}
        <label>Titulo:</label>
        <textarea type='text' placeholder='digite o titulo' value={titulo} onChange={ (e)=> setTitulo(e.target.value)}></textarea>

        {/* campo autor */}
        <label>Autor:</label>
        <textarea type='text' placeholder='Autor do post' value={autor} onChange={ (e)=> setAutor(e.target.value)}></textarea>

        <button onClick={handleAdd}>Cadastrar</button>

        <button onClick={buscarPost}>Buscar post</button>

      </div>

    </div>

  )
}

export default App
