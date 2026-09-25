// componente para renderizar o nome.
// podemos passar propriedades a um elemento
// assim podemos passar como atributos para que sejam renderizados no elemento.
export function Oferta({titulo, valor, descricao, cupom}){
  return(
    //Nao da ter 2 ou mais elementos HTML sem estarem dentro de uma tag
    // usa-se divs ou fragments '<>' para agrupar os elementos.
    <>
      <h2>{titulo} Valor: {valor}</h2>
      <h3>Descricao:</h3>
      <p>
        {descricao}
      </p>

      <b>Cupom: {cupom}</b>
    </>
  )
}
