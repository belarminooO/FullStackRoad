import { BrowserRouter, Routes, Route} from 'react-router'
import { Home } from './pages/home/index'
import { Contactos } from './pages/contactos/index'
import { Sobre } from './pages/sobre/index'
import { NotFound } from './pages/not-found/index'
import { Produto } from './pages/produto/index'


export function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contactos" element={<Contactos />}/>
        <Route path="/sobre" element={<Sobre />}/>

        <Route path="/produto/:id" element={<Produto />}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
