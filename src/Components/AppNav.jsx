import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import Switch from "./Switch";

const AppNav = ({ setLocale, locale, setLanguage }) => {

  const [ isOpen, setIsOpen ] = useState(false)

    return(
        <nav className="nav-main">
        <div className="name-nav">
        <Link to="/">
        <h1> Mario.M</h1>
        </Link>
        </div>
        <div className="pages-nav">
        <ul  className="links-nav">
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
            <button className="appnav-settings" onClick={() => setIsOpen(true)}><i className='bx bx-cog bx-sm'></i></button>
          </li>
        </ul>
        </div>
        <div className={`modal-appnav ${isOpen?  "is-visible" : ""}`}>
          <div className="visible-modal">
          <button  className="modal-button" onClick={() => setIsOpen(false)}><i className='bx bx-x    bx-md'></i></button>
            <h2><FormattedMessage id="app.appnav.settings" defaultMessage={"Settings"} /></h2>
            <h4><FormattedMessage id="app.appnav.changelanguage" defaultMessage={"Change language:"}/></h4>
              <select 
              onChange={(e) => {
                setLocale(e.target.value); 
                if(e.target.value === "es"){
                  setLanguage(true)
                } else {
                  setLanguage(false)
                }
              }}
              value={locale}>
                <option value="es"><FormattedMessage id="app.appnav.languageEs" defaultMessage={"Spanish"} /></option>
                <option value="en"><FormattedMessage id="app.appnav.languageEn" defaultMessage={"English"} /></option>
              </select>
              <h4><FormattedMessage id="app.appnav.changemode" defaultMessage={"Change mode:"}/></h4>
              <div className="switch-mode">
                <span><FormattedMessage id="app.appnav.darkmode" defaultMessage={"Dark"}/></span>
                <Switch/>
                <span><FormattedMessage id="app.appnav.lightmode" defaultMessage={"Light"}/></span>
              </div>
             
           </div>
        </div>
      </nav>
   
    )
}

export default AppNav;