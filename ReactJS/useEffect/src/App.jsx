
import {useState, useEffect} from 'react';

export default function App(){

  const [mostrar, setMostrar] = useState(false);

  function buscar(formData){
    const busca = formData.get('busca');
    alert(`Você esta procurando por: ${busca}`)
  }


return(
  <div>
    <h1>Ola bem vindo!</h1>


    <form action={buscar}>
      <label>Procurando algo?: </label>
        <input name="busca" type="text" placeholder="Digite o que esta procurando"></input>
        <br/>

        <button type="submit">Buscar</button>
    </form>

    <br/>
    <hr/>


    <h2>Lista de compras</h2>

    <button onClick={() => setMostrar(!mostrar)}>
      Mostrar/Esconder Lista
    </button>

    {mostrar && <ListaCompras />}

  </div>
 )
}


function ListaCompras (){

  const [lista, setLista] = useState(['Pagar a conta de luz'])

  useEffect(() => {
    // O useEffect é executado quando o componente é montado
    console.log('COMPONENTE LISTACOMPRAS MONTADO USEEFFECT CHAMADO')

    // O return do useEffect é executado quando o componente é desmontado
    return () => {
      console.log('COMPONENTE LISTACOMPRAS DESMONTADO')
    }
  }, [lista]) // array de dependencias, se estiver vazio, o useEffect será executado apenas uma vez, quando o componente for montado, se tiver alguma dependencia, o useEffect será executado sempre que a dependencia mudar.

  function adicionarItem(formData){
    const item = formData.get('item');
    setLista([...lista, item]);
    console.log("ITEM ADICIONADO!")
  }

  return(
    <div>
      <br/>
      <form action={adicionarItem}>
        <label>Novo Item: </label>
        <input type='text' name='item' placeholder='Digite o tem da lista...' ></input>

        <button type='submit'>
          Adicionar
        </button>
      </form>
    </div>
  )
}
