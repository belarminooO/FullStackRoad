import { db } from './fireBaseConection'
import { doc, setDoc, collection, addDoc, getDoc, getDocs } from 'firebase/firestore'
import { useState } from 'react'
import './app.css'


function App() {

  const[titulo, setTitulo] = useState('')
  const[autor, setAutor] = useState('')

  const[posts, setPosts] = useState([]);


  async function handleAdd(){
  // criar um doc com id especifico
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

    // pegar 1 doc em especifico:
    // const postRef = doc(db, 'posts', '12345')

    // await getDoc(postRef)
    // .then((snapshot)=>{
    //   setTitulo(snapshot.data().titulo)
    //   setAutor(snapshot.data().autor)
    // })
    // .catch(()=>{
    //   console.log('ERRO AO BUSCAR')
    // })


    const postRef = collection(db, 'posts')
    await getDocs(postRef)
    .then((snapshot)=>{

      let lista = [];

      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        })
      })

      setPosts(lista);

    })
    .catch((e)=>{
      console.log('ERRORO AO BUSCAR: ' + e)
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

        <ul>
          {posts.map((post)=>{
            return(
              <li key={post.id}>
                <span>Titulo: {post.titulo} </span> <br />
                <span>Autor: {post.autor} </span> <br /> <br />
              </li>
            )
          })}
        </ul>
      </div>

    </div>

  )
}

export default App
