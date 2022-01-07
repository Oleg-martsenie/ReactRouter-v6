import {  Routes, Route  } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { AboutGabriel } from './pages/about-gabriel'
import { AboutPedro } from './pages/about-predro'
import { NotFound } from './pages/notFound';


const App = () => {

  return (
    <div className="p-8">
      <header className='flex justify-between uppercase align-center p-2'>
        <div className="logo">
          <h1><a href="/">⚠️⚠️⚠️</a></h1>
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
        <Route path="/sobre/pedro" element={<AboutPedro />}/>
        <Route path="/sobre/gabriel" element={<AboutGabriel />}/>
        <Route path='*' element={<NotFound/>}/>

        {/* /sobre
        /sobre/gabriel
        /sobre/pedro */}
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
