import { db } from './fireBaseConection'
import { auth } from './fireBaseConection'

import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState, useEffect } from 'react'
import './app.css'


export default function App() {

  const[titulo, setTitulo] = useState('')
  const[autor, setAutor] = useState('')
  const[idPost, setIdPost] = useState('');

  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('')

  const[posts, setPosts] = useState([]);


  useEffect(()=>{
    async function loadPosts(){
      const unSub = onSnapshot(collection(db, 'posts'), (snapshot)=>{

        let listaPost = [];

      snapshot.forEach((doc)=>{
        listaPost.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        })
      })

      setPosts(listaPost);

      })
    }

    loadPosts();
  },[])


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
    // .catch((e)=>{
    //   console.log('ERRO AO BUSCAR: ' + e)
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


  async function editarPost() {

    const docRef = doc(db, 'posts', idPost)
    await updateDoc(docRef,{
      titulo: titulo,
      autor: autor
    })
    .then(()=>{
      console.log('POST ATUALIZADO')
      setIdPost('')
      setTitulo('')
      setAutor('')
    })
    .catch((e)=>{
      console.log('ERRO AO ATUALIZAR O POST: ' + e)
    })
  }


  async function excluirPost(id){

    const docRef = doc(db, 'posts', id)
    await deleteDoc(docRef)
    .then(()=>{
      console.log('POST DELETADO COM SUCESSO!')
    })
    .catch((e)=>{
      console.log('ERRO AO DELETAR O POST :' + e)
    })
  }

  async function novoUsuario(){
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(()=>{
      console.log('USUARIO CADASTRADO COM SUCESSO!')
      setEmail('')
      setSenha('')
    })
    .catch((error)=>{
      if(error.code === 'auth/weak-password'){
        alert('Senha muito fraca.')
      }else if(error.code === 'auth/email-already-in-use'){
        alert('Email ja existe!')
      }
    })
  }

  return (
    <div>
      <h1>ReactjS + Firebase</h1>

      <div className='container'>
        <h2>Usuarios</h2>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Digite o seu Email' />

        <label>Senha</label>
        <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Digite a sua senha' />

        <button onClick={novoUsuario}>Cadastrar</button>
      </div>

      <br /> <br />
      <hr />

      <div className='container'>
        <h2>Posts</h2>
        {/* id do post */}
        <label htmlFor="">Id do Post:</label>
        <input placeholder='Digite o ID do Post' value={idPost} onChange={ (e) => setIdPost(e.target.value)} />
        <br />

        {/* campo titulo */}
        <label>Titulo:</label>
        <textarea type='text' placeholder='digite o titulo' value={titulo} onChange={ (e)=> setTitulo(e.target.value)}></textarea>

        {/* campo autor */}
        <label>Autor:</label>
        <textarea type='text' placeholder='Autor do post' value={autor} onChange={ (e)=> setAutor(e.target.value)}></textarea>

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar post</button>
        <br />

        <button onClick={editarPost}>Atualizar post</button>

        <ul>
          {posts.map((post)=>{
            return(
              <li key={post.id}>
                <strong>ID: {post.id} </strong> <br />
                <span>Titulo: {post.titulo} </span> <br />
                <span>Autor: {post.autor} </span> <br />
                <button onClick={()=> excluirPost(post.id)}>Excluir</button> <br /> <br />
              </li>
            )
          })}
        </ul>
      </div>

    </div>

  )
}
