import Image from "next/image";
import { useState } from "react";
import Layout from "../../components/layout";
import styles from '../../styles/guitarras.module.css'


export default function Producto({ guitarra, agregarCarrito }) {

    const [cantidad, setCantidad] = useState(0)


    const { nombre, descripcion, precio, imagen } = guitarra[0].attributes

    const handleSubmit = e => {
        e.preventDefault()

        //* prevenimos que no se seleccione nada o sea("Seleccione")
        if (cantidad < 1) {
            alert("Cantidad no valida") //* mostramos alerta
            return //* salimos
        }
        //* creamos el objeto

        const guitarrraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.formats.medium.url,
            nombre,
            precio,
            cantidad,
        }

        //* pasando informacion al context
        agregarCarrito(guitarrraSeleccionada)

    }

    return (
        <Layout title={`GuitarLA - Guitarra ${nombre}`} description={`Guitarra , Tienda , Venta , ${nombre}`}>
            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.formats.medium.url} height={400} width={600} alt={`foto ${nombre}`} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <label htmlFor="cantidad">Cantidad:</label>
                        <select id="cantidad" onChange={e => setCantidad(+e.target.value)}>
                            <option value="">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input type="submit" value="Agregar al carrito" />
                    </form>
                </div>
            </div >
        </Layout>
    )
}


//*  ###### getServerSideProps ####### *//
//* tiene una desventaja , cada vez que entramos estariamos llamando a la API


//* obtenemos el valor de la query , mediante query y sacamos la url 
//*  puede ser renombrado a datos  tambien getServerSideProps(datos) console.log(datos.query.url)

/* export async function getServerSideProps({ query: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const { data: guitarra } = await respuesta.json()
    return {
        props: {
            guitarra
        }
    }
} */


//* ######### getStaticsProps y getStaticPaths ########### //*

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
    const { data } = await respuesta.json()
    //* hacemos un request


    //* construimos un array con un objeto params , que tiene las urls que se van a generar
    /* [
        { params: { url: 'clapton' } },
        { params: { url: 'page' } },
        { params: { url: 'beck' } }
    ] */

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))

    //*  ese array lo devolvemos para que lo use getStaticProps
    return {
        paths,
        fallback: false //* genera automaticamente una pagina 404, si la pagina no existe al poner en true tenemos que hacer la validacion a mano en Producto
    }
}


//* pasamos el array como los paths y desestructuramos el url de cada uno
export async function getStaticProps({ params: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const { data: guitarra } = await respuesta.json()
    return {
        props: {
            guitarra
        }
    }
}