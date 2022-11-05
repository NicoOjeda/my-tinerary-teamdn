import React from 'react'
import { useLocation } from 'react-router-dom'

export default function AutoToTop() {

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }, [pathname])




  return (
    <div>AutoToTop</div>
  )
}



 
// Crear componente de página Home1
// en total debe ocupar el 100% del ancho y el 100vh del alto
// definir y utilizar componente NavBar (con la barra de navegación con sus dos desplegables funcionando)
// definir y utilizar componente AutoToTop (para "subir arriba de todo" cada vez que se cambia de página)
// definir y utilizar componente CallToAction (para linkear a ciudades y hoteles)