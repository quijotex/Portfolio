
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route, Link  } from 'react-router-dom'
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

function App() {
 
  const [ locale, setLocale ] = useState("en");
  const [ messages, setMessages ] = useState({})
  const [ language, setLanguage ] = useState(false)


  useEffect(() => {
    import(`./locales/${locale}.json`).then((messages) => {
      setMessages(messages)
    })
  }, [locale])
  return (
    <>
     <HashRouter> 
      <IntlProvider messages={messages} key={locale}  locale={locale}>
        <AppNav setLocale={setLocale} locale={locale}/>
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
      </IntlProvider>    
     </HashRouter>
    </>
  )
}

export default App
