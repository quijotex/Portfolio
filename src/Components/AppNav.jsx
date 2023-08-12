import { Link } from "react-router-dom";

const AppNav = () => {
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
            <Link to="/aboutme">About me</Link>
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
        </div>
      </nav>
   
    )
}

export default AppNav;