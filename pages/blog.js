
import Layout from "../components/layout"
import Post from "../components/post"
import style from '../styles/grid.module.css'


//* componente encargado de recibir una serie de post y mapearlos para mostrarlos con el Componente Post

export default function Blog({ posts }) {

    return (
        <Layout title={"GuitarLA - Blog"} description={"GuitarLA - Blog de musica , Blog de guitarra , Blog instrumentos"}>
            <main className="contenedor">
                <h1 className="heading">Blog</h1>
                <div className={style.grid}>
                    {posts?.map(post => (
                        <Post key={post.id} post={post.attributes} />
                    ))}
                </div>

            </main>
        </Layout>
    )
}

export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`); //*    hacemos fetch para obtener una lista de posts
    const { data: posts } = await respuesta.json() //* desestructuramos data de la respuesta de fetch y la asignamos a posts

    return { //* getStaticProps siempre debe retornar algo que tenga un objeto props : {} , se puede exportar a Tienda como un props comun no hace falta ningun hook
        props: {
            posts
        }
    }
}

