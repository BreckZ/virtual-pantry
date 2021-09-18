import { Link } from 'react-router-dom';

const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  // alignItems: "flex-end"
  paddingTop: "3%"
}

function Navbar() {
  return (
    <>
      <div style={navStyle}>
        <Link to="/">
          <span>|Home|</span>
        </Link>
        <Link to="/search">
          <span>|Search|</span>
        </Link>
        <Link to="/pantry">
          <span>|Pantry|</span>
        </Link>
      </div>
    </>
  )
}

export default Navbar
