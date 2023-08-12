
import './App.css'
import { HashRouter, Routes, Route, Link  } from 'react-router-dom'
import AboutMe from './Pages/AboutMe'
import Work from './Pages/Work'
import Skillset from './Pages/Skillset'
import Learning from './Pages/Learning'
import Contact from './Pages/Contact'
import AppNav from './Components/AppNav'
import Home from './Pages/Home'

function App() {
 

  return (
    <>
     <HashRouter>      
        <AppNav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
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
