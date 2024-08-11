import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [sidebar, setSidebar] = useState(true)

  return (

    <BrowserRouter>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />


      </Routes>
    </BrowserRouter>


  )
}

export default App
