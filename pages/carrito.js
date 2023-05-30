import Image from "next/image"
import { useEffect, useState } from "react"
import Layout from "../components/layout"
import styles from '../styles/carrito.module.css'
/**
 * Funcion que maneja el Carrito de compras
 *
 * @param {state} carrito Estado que maneja el carrito.
 * @param {function} actualizarCantidad Funcion que actualiza la cantidad de un Producto.
 * @param {function} eliminarProduct Funcion que elimina un Producto mediante un id.
 * @return {component} si el carrito esta vacio muestra mensaje de vacio , de lo contrario el estado carrito.
 */


export default function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {

    const [total, setTotal] = useState(0) //* estado que maneja el estado del carrito

    //* efecto que se dispara cada vez que se actualiza el estado carrito
    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])

    return (
        <Layout title={"GuitarLA - Carrito de Compras"} alt={"GuitarLA - Carrito , Venta de Guitarras"}>
            <main className="contenedor">
                <h1 className="heading">Carrito</h1>
                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Articulos</h2>
                        {
                            carrito.length === 0 ? 'Carrito Vacio' : (
                                carrito.map(producto => (
                                    <div key={producto.id} className={styles.producto}>
                                        <div>
                                            <Image src={producto.imagen} alt={`Imagen carrito ${producto.nombre}`} width={250} height={480} />
                                        </div>
                                        <div>
                                            <p className={styles.nombre}>{producto.nombre}</p>
                                            <div className={styles.cantidad}>
                                                <select className={styles.select} onChange={e => actualizarCantidad({ id: producto.id, cantidad: e.target.value })} value={producto.cantidad}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                            <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                            <p className={styles.subtotal}>Subtotal : $<span>{producto.cantidad * producto.precio}</span></p>
                                        </div>
                                        <button className={styles.eliminar} type="button" onClick={() => eliminarProducto(producto.id)}>X</button>
                                    </div>
                                ))

                            )}

                    </div>

                    <aside className={styles.resumen}>
                        <h3>Resumen del Pedido</h3>
                        <p>Total a pagar : ${total}</p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}

/**
* calculoTotal
* carrito es un array que contiene objetos de productos en el carrito de compras.  
* reduce() es un método de los arrays en JavaScript que se utiliza para reducir los elementos de un array a un único valor. Recibe una función de callback y un valor inicial.
* La función de callback se ejecuta por cada elemento del array y recibe dos parámetros: total y producto. total representa el valor acumulado en cada iteración, mientras que producto es el objeto de producto actual en el carrito.
* En cada iteración, se calcula el subtotal del producto multiplicando la cantidad (producto.cantidad) por el precio (producto.precio).
* Luego, se suma el subtotal al valor acumulado (total) para obtener el nuevo valor acumulado.
* Finalmente, el método reduce() devuelve el valor acumulado total una vez que ha recorrido todos los elementos del array.
* El último argumento de reduce() es el valor inicial del total, que se establece en 0.
*/