import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import Favorite from './pages/AboutUs'
import Home from './components/Home'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
function App() {

  return (

    <>
      <Navbar />
      <Outlet />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Favorite' element={<Favorite />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}
    </>
  )
}

export default App
