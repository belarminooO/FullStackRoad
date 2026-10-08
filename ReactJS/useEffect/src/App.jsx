
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

  const [lista, setLista] = useState(['Comprar coca-cola', 'Comprar pão']);

  useEffect(() => {
    const lista = localStorage.getItem('lista-compras');
    if(lista){
      setLista(JSON.parse(lista));
    }
  })
  function adicionarItem(formData){
    const item = formData.get('item');
    setLista([...lista, item]);
    localStorage.setItem('lista-compras', JSON.stringify([...lista, item]));
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
      <br/> <br/>

      <h4>Itens </h4>

      <ul>
        {lista.map( (item, index) =>
          <li key = {index}>{item}</li>
        )}
      </ul>
    </div>
  )
}
