import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import Switch from "./Switch";
import { animated, useSpring } from '@react-spring/web';

const AppNav = ({ setLocale, locale, setLanguage, setCVMario }) => {

  const [ isOpen, setIsOpen ] = useState(false);
  const [ isModal, setIsModal ] = useState(false);
  

  const animatedIn = useSpring({
    from: {opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 700} ,
  })

  const animationLeft = useSpring({
    from: { x: 1000 },
    to: { x: 0 },
    config: {duration: 1600} ,
  })

  const animatedAboutme = useSpring({
    from: {opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 400} ,
  })

  const animatedWork = useSpring({
    from: {opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 600} ,
  })

  const animatedSkillset = useSpring({
    from: {opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 800} ,
  })

  const animatedLearning = useSpring({
    from: {opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 1000} ,
  })

  const animatedContact = useSpring({
    from: {opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 1200} ,
  })

  const animatedSettings = useSpring({
    from: {opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 1400} ,
  })

  const handleLanguages = (e) => {
    setLocale(e.target.value)  
    if(e.target.value === "es"){
      setLanguage(true)
      setCVMario(true)
    } else {
      setLanguage(false)
      setCVMario(false)
    }
  }
    return(
        <nav className="nav-main">
        <div className="name-nav">
        <animated.div style={animatedIn} >
        <Link to="/">
        <h1> Mario.M</h1>
        </Link>
        </animated.div>
        </div>
        <div  className="pages-nav">
          
          <animated.div style={animatedIn} className="links-nav">
            <ul className="links-nav" >
              <li>
                <Link to="/aboutme">
                  <FormattedMessage id="app.appnav.about" defaultMessage={"About me"} /></Link>
              </li>
              <li>
                <Link to="/work"><FormattedMessage id="app.appnav.work" defaultMessage={"Work"} /></Link>
              </li>
              <li>
                <Link to="/skillset"><FormattedMessage id="app.appnav.skillset" defaultMessage={"Skillset"} /></Link>
              </li>
              <li>
                <Link to="/learning"><FormattedMessage id="app.appnav.learning" defaultMessage={"Learning"} /></Link>
              </li>
              <li>
                <Link to="/contact"><FormattedMessage id="app.appnav.contact" defaultMessage={"Contact"} /></Link>
              </li>
              <li>
                <button id='Settings' aria-label="Settings" className="appnav-settings" onClick={() => setIsOpen(true)}><i className='bx bx-cog bx-sm'></i></button>
              </li>
            </ul>
          </animated.div>
            
           
             {/* Modal responsive */}
            <animated.div style={animatedIn} className='modal-show'>
              <button id="modal" aria-label="modal-responsive" onClick={() => setIsModal(true)}><i className='bx bx-menu-alt-right bx-lg'></i></button>
            </animated.div>
               {/* Final code Button Modal responsive */}
        </div>
        <div className={`modal-appnav ${isOpen?  "is-visible" : ""}`}>
          <div className="visible-modal">
          <button id="modal-button" aria-label="modal-button-responsive" className="modal-button" onClick={() => setIsOpen(false)}><i className='bx bx-x    bx-md'></i></button>
            <h2><FormattedMessage id="app.appnav.settings" defaultMessage={"Settings"} /></h2>
            <h4><FormattedMessage id="app.appnav.changemode" defaultMessage={"Change mode:"}/></h4>
            <div className="switch-mode">
                <span><FormattedMessage id="app.appnav.darkmode" defaultMessage={"Dark"}/></span>
                <Switch/>
                <span><FormattedMessage id="app.appnav.lightmode" defaultMessage={"Light"}/></span>
              </div>
            <h4><FormattedMessage id="app.appnav.changelanguage" defaultMessage={"Change language:"}/></h4>
              <select 
              onChange={handleLanguages}
              value={locale}>
                <option value="es"><FormattedMessage id="app.appnav.languageEs" defaultMessage={"Spanish"} /></option>
                <option value="en"><FormattedMessage id="app.appnav.languageEn" defaultMessage={"English"} /></option>
              </select>
           </div>
        </div>
       {/* Modal responsive */}
        <animated.div style={animatedIn} className={`show-options ${isModal ? "isModal" : ""}`}>
          
            <ul className="show-options__nav">
            <button id="deployment-options" aria-label="options" onClick={() => setIsModal(false)}className="close-button"><i className='bx bx-x bx-sm'></i></button>
                  <li onClick={() => setIsModal(false)}>
                    <Link to="/aboutme" >
                      <FormattedMessage id="app.appnav.about" defaultMessage={"About me"} /></Link>
                  </li>
                  <li onClick={() => setIsModal(false)}>
                    <Link to="/work"><FormattedMessage id="app.appnav.work" defaultMessage={"Work"} /></Link>
                  </li>
                  <li onClick={() => setIsModal(false)}>
                    <Link to="/skillset"><FormattedMessage id="app.appnav.skillset" defaultMessage={"Skillset"} /></Link>
                  </li>
                  <li onClick={() => setIsModal(false)}>
                    <Link to="/learning"><FormattedMessage id="app.appnav.learning" defaultMessage={"Learning"} /></Link>
                  </li>
                  <li onClick={() => setIsModal(false)}>
                    <Link to="/contact"><FormattedMessage id="app.appnav.contact" defaultMessage={"Contact"} /></Link>
                  </li>
                  <li onClick={() => setIsModal(false)}>
                    <button id="settings-responsive" aria-label="settings-responsive" className="show-options__button" onClick={() => setIsOpen(true)}><i className='bx bx-cog bx-md'></i></button>
                  </li>
                </ul>
            </animated.div>
      </nav>
   
    )
}

export default AppNav;