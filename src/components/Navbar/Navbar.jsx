import "./Navbar.scss";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-link">
        <span>Home</span>
      </Link>
      <Link to="/dsa" className="nav-link">
        <span>DSA</span>
      </Link>
      <Link to="/javascript" className="nav-link">
        <span>JavaScript</span>
      </Link>
    </nav>
  );
}

export default Navbar;
