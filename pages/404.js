import Image from "next/image"
import Link from "next/link"
import Layout from "../components/layout"
import Imagen404 from '../public/img/404.png'

export default function Error404() {
    return (
        <Layout title="GuitarLA - Pagina No Encontrada" description="GuitarLA - Pagina No encontrada">
            <div className="imagen-contenedor">
                <Image src={Imagen404.src} width={500} height={300} alt="Imagen 404" />
            </div>
            <p className="error">Pagina no encontrada</p>
            <Link className='error-enlace' href='/tienda'> Ir a la Tienda </Link>
        </Layout>
    )
}

//* se utiliza para personalizar la página de error 404, que se muestra cuando una ruta no se encuentra en tu aplicación.