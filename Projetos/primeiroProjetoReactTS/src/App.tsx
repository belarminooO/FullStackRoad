import { Header } from "./components/header"
import { Aluno } from "./components/aluno"
import { Footer } from "./components/footer"

export default function App(){
  return(
    <div>
      <Header title="Aprendendo do zero ao avançado!"/>
      <Aluno nome="Belarmino Sacate" idade={21}/>
      <Aluno nome="He wanna pay full price" idade={67}/>
      <Footer/>
    </div>
  )
}
