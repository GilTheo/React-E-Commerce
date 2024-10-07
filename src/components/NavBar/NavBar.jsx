import './navbar.css'
import CarWidget from './CartWidget'

const NavBar = () => {
    
    return(

        <nav className='navbar'>
          <div className='brand'>
            <h2>Theo's Shop</h2>
            </div>

            <ul>
                <li>Inicio</li>
                <li>Muebles</li>
                <li>Sobre Nosotros</li>
            </ul>

          <CarWidget/>
        </nav>

    )
}

export default NavBar