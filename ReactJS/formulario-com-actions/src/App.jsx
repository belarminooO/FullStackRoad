// deta maneira so sabe-se que o formulario foi enviado, mas não é possivel pegar os dados do formulario a medida que o usurio vai digitando, para isso é necessario usar o onSubmit com o useState.
export default function App(){

  function buscar(formData){
    const busca = formData.get('busca');
    alert(`Você esta procurando por: ${busca}`)
  }


return(
  <div>
    <h1>Formulario de Cadastro</h1>


    <form action={buscar}>
      <label>Procurando algo?: </label>
        <input name="busca" type="text" placeholder="Digite o que esta procurando"></input>
        <br/>

        <button type="submit">Buscar</button>
    </form>

    <br/>
    <hr/>
  </div>
 )
}
