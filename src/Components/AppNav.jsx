import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useState } from "react";

const AppNav = ({ setLocale, locale }) => {

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
              <FormattedMessage id="app.appnav.about" defaultMessage="About me" /></Link>
          </li>
          <li>
            <Link to="/work"><FormattedMessage id="app.appnav.work" defaultMessage="Work" /></Link>
          </li>
          <li>
            <Link to="/skillset"><FormattedMessage id="app.appnav.skillset" defaultMessage="Skillset" /></Link>
          </li>
          <li>
            <Link to="/learning"><FormattedMessage id="app.appnav.learning" defaultMessage="Learning" /></Link>
          </li>
          <li>
            <Link to="/contact"><FormattedMessage id="app.appnav.contact" defaultMessage="Contact" /></Link>
          </li>
          <li>
            <button onClick={() => setIsOpen(true)}><i className='bx bx-cog'></i></button>
          </li>
        </ul>
        <div className={isOpen? "modal-appnav--visible" : "modal-appnav" }>
              <select 
              onChange={(e) => {
                setLocale(e.target.value);
                value={locale}
              }}>
                <option value="es"><FormattedMessage id="app.appnav.languageEs" defaultMessage="Spanish" /></option>
                <option value="en"><FormattedMessage id="app.appnav.languageEn" defaultMessage="English" /></option>
              </select>
        </div>
        </div>
      </nav>
   
    )
}

export default AppNav;