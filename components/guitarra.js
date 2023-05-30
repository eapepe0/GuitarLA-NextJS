import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'

export default function Guitarra({ guitarras }) {
    const { descripcion, imagen, precio, nombre, url } = guitarras //* extraemos de los datos recibidos
    return (
        <div className={styles.guitarra}>
            <Image src={imagen.data.attributes.formats.medium.url} height={400} width={600} alt={`foto ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles?.descripcion}>{descripcion}</p>
                <p className={styles?.precio}>${precio}</p>
                <Link className={styles.enlace} href={`/guitarras/${url}`}> Ver Producto </Link>
            </div>
        </div >
    )
}



//* Componente encargado de mostrar una imagen , el titulo precio y un boton.
//* Usamos varios para crear la tienda o para mostrarlos en el index
//* Usamos el componente Image de Next