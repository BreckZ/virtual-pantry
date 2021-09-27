import { Link } from 'react-router-dom';
import './Navbar.css'

// const navStyle = {
//   display: "flex",
//   justifyContent: "space-around",
//   flexDirection: "flex-end",
//   // alignItems: "flex-end"
//   paddingTop: "3%"
// }

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <Link to="/">
          <span className="links">Home</span>
        </Link>
        <Link to="/search">
          <span className="links">Search</span>
        </Link>
        <Link to="/pantry">
          <span className="links">Pantry</span>
        </Link>
      </div>
    </>
  )
}

export default Navbar
