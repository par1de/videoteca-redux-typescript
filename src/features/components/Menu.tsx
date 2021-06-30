import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <Link to="/" className="nav-Link">
        Home
      </Link>
      <Link to="/ricerca" className="nav-link">
        Ricerca
      </Link>
    </>
  );
}

export default Menu;
