import "./Navbar.scss";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/dsa">
        <span>DSA</span>
      </Link>
      <Link to="javascript">
        <span>JavaScript</span>
      </Link>
    </nav>
  );
}

export default Navbar;
