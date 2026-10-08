import { BrowserRouter, Routes, Route} from 'react-router'
import { Home } from './pages/home/index'
import { Contactos } from './pages/contactos/index'
import { Sobre } from './pages/sobre/index'

export function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contactos" element={<Contactos />}/>
        <Route path="/sobre" element={<Sobre />}/>
      </Routes>
    </BrowserRouter>
  )
}
