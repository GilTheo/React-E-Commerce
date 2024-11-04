import "./navbar.css"
import CarWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <h2>Theo's</h2>
      </Link>

      <ul>
        <li>
          <Link to="/category/dormitorio" className="link">
            Dormitorio
          </Link>
        </li>
        <li>
          <Link to="/category/comedor" className="link">
            Comedor
          </Link>
        </li>
        <li>
          <Link to="/category/living" className="link">
            Living
          </Link>
        </li>
      </ul>

      <CarWidget />
    </nav>
  )
}

export default NavBar
