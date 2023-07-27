
import './App.css'
import { HashRouter, Routes, Route, Link  } from 'react-router-dom'
import AboutMe from './Pages/AboutMe'
import Work from './Pages/Work'
import Skillset from './Pages/Skillset'
import Learning from './Pages/Learning'
import Contact from './Pages/Contact'

function App() {
 

  return (
    <>
     <HashRouter>
      <header>Mario.M</header>
      <nav>
        <ul>
          <li>
            <Link to="/">About me</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/skillset">Skillset</Link>
          </li>
          <li>
            <Link to="/learning">Learning</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/skillset' element={<Skillset/>}/>
        <Route path='/learning' element={<Learning/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </HashRouter>
    </>
  )
}

export default App
