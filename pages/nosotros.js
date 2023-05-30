import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

/**
* Renderiza el componente Nosotros el cual muestra un titulo , una imagen 
* 
* @return {component}  Pagina Nosotros
*/


export default function Nosotros() {
    return (
        <>
            <Layout title={"GuitarLA - Nosotros"} description={"GuitarLA - Nuestra Historia"}>
                <main className="contenedor">
                    <h1 className="heading">Nosotros</h1>
                    <div className={styles.contenido}>
                        <Image alt="imagen nosotros" src='/img/nosotros.jpg' width={1000} height={1000} />
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet lacus vel augue cursus, non efficitur dolor tempor. Etiam et dictum lacus. Aliquam dictum ante sed lectus molestie accumsan. Sed sagittis ante at dui sollicitudin, quis vestibulum erat sodales. Integer maximus aliquam tortor ut posuere. Maecenas tristique sapien sapien, in malesuada nisl tempor iaculis. Fusce semper vestibulum ex. Morbi et sagittis leo.</p>
                            <p>Sed ultrices, lectus nec consectetur convallis, odio lectus dapibus tortor, sit amet molestie nulla ante eu magna. In dignissim nisi tristique turpis tincidunt, et tincidunt odio facilisis. Nulla est orci, venenatis ac pretium eget, rutrum non nulla. Suspendisse tincidunt lacus neque, at mattis tortor pharetra in. Fusce in justo aliquam, maximus nunc at, ullamcorper ipsum. Integer felis lectus, tempor vitae nisl vel, cursus varius ex.</p>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}
