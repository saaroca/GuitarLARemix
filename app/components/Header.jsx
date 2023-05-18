import { Link } from '@remix-run/react'
import Logo from '../../public/img/logo.svg'
import Navegacion from './Navegacion'

function header() {
    return (
      <header className="header">
          <div className="contenedor barra">
              <Link  to="/">
                  <img className='logo' src={Logo} alt="Imagen logo" />
              </Link>
              <Navegacion />
          </div>
      </header>
  )
}

export default header