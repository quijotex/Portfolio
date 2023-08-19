
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import AboutMe from './Pages/AboutMe'
import Work from './Pages/Work'
import Skillset from './Pages/Skillset'
import Learning from './Pages/Learning'
import Contact from './Pages/Contact'
import AppNav from './Components/AppNav'
import Home from './Pages/Home'
import Footer from './Components/Footer';
import { IntlProvider } from 'react-intl';
import { useState, useEffect } from 'react';
import spanish from './locales/es.json';
import english from './locales/en.json';

function App() {
 
  const [ locale, setLocale ] = useState("en");
  const [ language, setLanguage ] = useState(false)

  const switchLanguages = {
    en: english,
    es: spanish
  }

const LocalData = switchLanguages[locale]
 
  return (
    
    <IntlProvider messages={LocalData} key={locale}  locale={locale}>
     <HashRouter> 
      
        <AppNav setLocale={setLocale} locale={locale} setLanguage={setLanguage}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route element={<Footer/>}>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/skillset' element={<Skillset/>}/>
          <Route path='/learning' element={<Learning/>}/>
          </Route>
          <Route path='/contact' element={<Contact language={language}/>}/>
      </Routes>
    
     </HashRouter>
     </IntlProvider> 
  
  )
}

export default App
