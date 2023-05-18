import { Link, useLocation } from '@remix-run/react'
import imagen from '../../public/img/carrito.png'
function Navegacion() {

    const location = useLocation()

    return (
      <nav className="navegacion">
                    <Link
                        to="/"
                        className={location.pathname === '/' ? 'active' : ''}>
                        Inicio </Link>
                    <Link
                        to="/Nosotros"
                        className={location.pathname === '/Nosotros' ? 'active' : ''}>
                        Nosotros</Link>
                    <Link
                        to="/guitarras"
                        className={location.pathname === '/guitarras' ? 'active' : ''}>
                        Tienda</Link>
                    <Link
                        to="/Blog"
                        className={location.pathname === '/Blog' ? 'active' : ''}>
                        Blog</Link>
                    <Link
                        to="/carrito"
                        >
                        <img src={imagen} alt='carrito de compras' /></Link>
      </nav>
  )
}

export default Navegacion