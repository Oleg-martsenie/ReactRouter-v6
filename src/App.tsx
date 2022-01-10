import {  Routes, Route  } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { AboutItem } from './pages/about-item'
import { NotFound } from './pages/notFound';


const App = () => {

  return (
    <div className="p-8">
      <header className='flex justify-between uppercase align-center p-2'>
        <div className="logo">
          <h1><Link to="/">⚠️⚠️⚠️</Link></h1>
        </div>
        <div className="menu">
          <nav>
            <a href="/" className='mr-4  px-2 py-2 '>home</a>
            <a href="/sobre" className='mr-4 px-2 py-2 '>sobre</a>
            <a href="/contact" className='ml- px-2 py-2 '>contact</a>
          </nav>
        </div>
      </header>
      <hr />
      <div className="py-4">

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<About />}/>
        <Route path="/sobre/:slug" element={<AboutItem />} />
        <Route path='*' element={<NotFound/>}/>

      </Routes>

      </div>
      <hr />
      <footer>
        Todos os direitos reservados
      </footer>
    </div>
  )
}

export default App
