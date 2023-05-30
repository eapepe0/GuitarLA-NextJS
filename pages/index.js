import Guitarra from "../components/guitarra"
import Layout from "../components/layout"
import stylesGrid from '../styles/grid.module.css'
import Post from "../components/post"
import Curso from "../components/curso"

/**
* Home
*
* @param {array} guitarras Array de objetos obtenidos de la API /guitarras
* @param {array} post Array de objetos obtenidos de la API /posts
* @return {component} Retorna un componente que muestra las Guitarras , el Curso y los post del Blog.
*/

export default function Home({ guitarras, posts, curso }) {
  console.log(guitarras)
  return (
    <>
      <Layout title={"Inicio"} description={"GuitarLA - Venta de Guitarras."}>
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>
          <div className={stylesGrid.grid}>
            {guitarras?.map(guitarra => (
              <Guitarra key={guitarra.id} guitarras={guitarra.attributes} />
            ))}
          </div>
        </main>
        <Curso curso={curso} />
        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={stylesGrid.grid}>
            {posts.map(post => (
              <Post key={post.id} post={post.attributes} />
            ))}

          </div>
        </section>


      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`   //* generamos las urls que vamos a usar en el fetch
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`  //* generamos las urls que vamos a usar en el fetch
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`  //* generamos las urls que vamos a usar en el fetch


  //* hacemos unas promesas de fetch´s y las guardamos en peticion , cada una en su respectiva constante
  const [peticionGuitarras, peticionPosts, peticionCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])

  //* hacemos una promesas de .json() , extraemos la data y lo guardamos en (guitarras , posts , curso)
  const [{ data: guitarras }, { data: posts }, { data: curso }] = await Promise.all([
    peticionGuitarras.json(),
    peticionPosts.json(),
    peticionCurso.json(),
  ])

  //* devuelve un objeto , que tiene props donde metemos lo que obtuvimos de la API
  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}