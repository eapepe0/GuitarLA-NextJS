import Image from "next/image"
import Link from "next/link"
import styles from '../styles/blog.module.css'
import { formatearFecha } from '../utils/helpers'

export default function Post({ post }) {
    const { contenido, Titulo, url, publishedAt } = post
    const imagen = post.imagen.data.attributes.formats.small.url
    return (
        <article>
            <Image src={imagen} alt={`Imagen post ${Titulo}`} width={600} height={400} />

            <div className={styles.contenido}>
                <h3>{Titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link className={styles.enlace} href={`/blog/${url}`} > Leer Post </Link>
            </div>
        </article>
    )
}

//* componente que muestra un post