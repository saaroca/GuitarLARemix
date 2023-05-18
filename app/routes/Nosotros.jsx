import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'
import { useOutletContext } from '@remix-run/react'
//meta solo funciona en routes no en components
export function meta() {
  return (
    {
      title: 'GuitarLA - Nosotros',
      //description muy recomendada para el SEO
      description: 'Venta de guitarras, blog de música'
    }
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  const data = useOutletContext()
  
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
          <img src={imagen} alt="imagen sobre nosotros" />
          <div>
            <p>orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
              cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer 
              un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos</p>
              <p>Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, 
                ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. 
                Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. 
                Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, 
                haciendo a este el único generador verdadero (válido) en la Internet.</p>
          </div>
      </div>
    </main>
  )
}

export default Nosotros