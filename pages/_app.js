import { useEffect, useState } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  //* en caso de que window no sea undefined lee el LS si existe sino, un [] vacio , de lo contrario (:) carritoLS es array vacio (de esta forma sabemos si se ejecuta en el cliente(window) o en el servidor)
  //* con JSON.parse convertimos de string a array
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [carrito, setCarrito] = useState(carritoLS) //* nuestro array que va a manejar el carrito

  const [paginaLista, setPaginaLista] = useState(false)

  useEffect(() => {
    setPaginaLista(true)
  }, []) //* se ejecuta la 1era vez , pone el state en true , avisando que el documento se renderizo por 1era vez , cargando el LS esto hace que se hidrate
  //* hidratar = servidor y cliente tienen los mismos datos.

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))  //* creamos en LS  un item llamado carrito , convertimos el array a string
  }, [carrito]) //* se ejecuta cada vez que cambia el carrito



  const agregarCarrito = guitarra => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map(guitarraState => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      // Se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, guitarra]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map(guitarraState => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = parseInt(guitarra.cantidad)
      }
      return guitarraState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  //* si paginaLista es verdadero  renderiza sino no hace nada
  return paginaLista ? <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad} />
    : null
}

export default MyApp
