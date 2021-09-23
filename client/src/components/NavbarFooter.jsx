import { Link } from 'react-router-dom';
import './NavbarFooter.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

function NavbarFooter() {
  return (
    <>
      <div className="NavbarFooter">
        <Link to="/">
          <FontAwesomeIcon className="home-icon" icon={faHome} size="lg" />
        </Link>
        <Link to="/search">
          <FontAwesomeIcon className="search-icon" icon={faSearch} size="lg"/>
        </Link>
        <Link to="/pantry">
        <FontAwesomeIcon className="pantry-icon" icon={faBoxOpen} size="lg"/>
        </Link>
      </div>
    </>
  )
}

export default NavbarFooter