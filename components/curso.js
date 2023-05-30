
import styles from '../styles/curso.module.css'
//* exportamos los estilos css
export default function Curso({ curso }) {
    const { contenido, titulo, imagen } = curso.attributes //* extraemos de los datos recibidos 

    return (<>
        <section className={`${styles.curso} curso`}>
            <style jsx>
                {`
                .curso{
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb( 0 0 0 / .7)),url(${imagen.data.attributes.url})
                }
                `}
            </style>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p>{contenido}</p>
                </div>
            </div>
        </section>
    </>
    )
}

//* componente encargado de mostrar una imagen y el contenido de los cursos
//* 