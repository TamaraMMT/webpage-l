import './App.css'
import NavBar from './components/NavBar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Footer from './components/Footer'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App
