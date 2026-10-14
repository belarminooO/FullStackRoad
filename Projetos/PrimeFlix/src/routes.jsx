import { BrowserRouter, Routes, Route } from 'react-router'


import Home from './pages/Home/index';
import Filme from './pages/Filme/index'
import Header from './components/Header/index'
import Erro from './pages/Erro/index'
import Favoritos from './pages/Favoritos/index'


export function RoutesApp(){
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/filme/:id' element={<Filme/>}/>
        <Route path='/favoritos' element={<Favoritos/>}/>

        <Route path='*' element={<Erro/>}/>
      </Routes>
    </BrowserRouter>
  )
}
