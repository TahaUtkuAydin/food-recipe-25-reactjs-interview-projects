import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home'
import Details from './pages/details'
import Favorites from './pages/favorites'

function App() {


  return (
    <>
    <div className='min-h-screen'>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/favorites' element={<Favorites/>}></Route>
      <Route path='/recipe-item/:id' element={<Details/>}></Route>
     </Routes>
    </div>
    </>
  )
}

export default App
