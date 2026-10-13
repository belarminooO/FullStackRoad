import { BrowserRouter, Routes, Route } from 'react-router'


import { Home } from './pages/Home/index';
import { Filme } from './pages/Filme/index'


export function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/filme/:id' element={<Filme/>}/>
      </Routes>
    </BrowserRouter>
  )
}
