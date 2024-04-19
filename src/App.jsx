
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import {  Home, Pokemones, NotFound, Pokemon } from './view/Index.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/pokemones' element={ <Pokemones />} />
          <Route path='/pokemon/:name' element={ <Pokemon /> } />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
