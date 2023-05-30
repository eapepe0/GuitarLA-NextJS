import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import { formatearFecha } from "../../utils/helpers";

import styles from '../../styles/blog.module.css'

export default function EntradaPost({ post }) {
    const { Titulo, publishedAt, contenido } = post[0].attributes
    const imagen = post[0].attributes.imagen.data.attributes.formats.medium.url

    return (
        <Layout>
            <article className={`${styles.post} ${styles["mt-3"]}`}>
                <Image src={imagen} alt={`imagen blog ${Titulo}`} width={1000} height={400} />
                <div className={styles.contenido}>
                    <h1>{Titulo}</h1>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.contenido}>{contenido}</p>
                    <Link className={styles.enlace} href={"/blog"}>Volver</Link>
                </div>
            </article>
        </Layout>
    )
}

//*   getStaticPaths y getStaticProps. Estas funciones son características de Next.js 
//*  Se utilizan para generar páginas estáticas en función de los datos proporcionados por una API externa.


export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`); //*    hacemos fetch para obtener una lista de posts
    const { data } = await respuesta.json() //* se extrae la propiedad data de la respuesta JSON 

    const paths = data.map(post => ({ //* mapea sobre ella para obtener un array de objetos paths
        params: { //* Cada objeto path contiene un parámetro params con la URL de un post específico.
            url: post.attributes.url
        }
    }))


    //*  se devuelve un objeto con la propiedad paths que contiene el array de objetos paths 
    //* y fallback establecido en false para indicar que cualquier ruta no generada por getStaticPaths debe mostrar una página 404.
    return {
        paths,
        fallback: false
    }
}

//* Esta función se utiliza para obtener los datos necesarios para renderizar una página estática en función de los parámetros proporcionados.

export async function getStaticProps({ params: { url } }) { //* se recibe un parámetro url que corresponde a la URL de un post específico.
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`); //* Se realiza una solicitud a la API utilizando fetch, pasando la URL del post como filtro en la consulta.
    const { data: post } = await respuesta.json() //*  extrae la propiedad data de la respuesta JSON y se asigna a la variable post

    //* se devuelve un objeto con la propiedad props que contiene los datos del post, que luego se pueden utilizar en el componente de página correspondiente.
    return {
        props: {
            post
        }
    }
}