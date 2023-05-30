import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
import styles from '../styles/grid.module.css'

/**
* Tienda , mapea el array de objetos de guitarras el cual obtenemos por la API y lo mostramos en forma de grilla
*
* @param {array} guitarras array de objetos el cual obtenemos de la API
* @return {component}  Componente el cual se leen los datos de API y se renderiza usando getServerSidePros
*/



//* aca ya guitarras estaria de parte del cliente
export default function Tienda({ guitarras }) {

  return (
    <Layout title={"GuitarLA - Tienda"} description={"GuitarLA - Tienda Virtual"}>
      <main className="contenedor">
        <h2 className="heading">Nuestra Coleccion</h2>
        <div className={styles.grid}>
          {guitarras.map(guitarra => (
            <Guitarra key={guitarra.id} guitarras={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  )
}


//******* getStaticProps () ****************/

//* 1ero se ejecuta la parte del servidor
//* esto se genera el el build , desde la parte del server
//* esto se mantiene actualizado al momento que se genera la build, no mantiene los datos actualizados de la API en tiempo real


/* export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const { data: guitarras } = await respuesta.json() //* desestructuramos data de la respuesta de fetch y la asignamos a guitarras
  console.log(guitarras);

  return { //* getStaticProps siempre debe retornar algo que tenga un objeto props : {} , se puede exportar a Tienda como un props comun no hace falta ningun hook
    props: {
      guitarras
    }
  }
} */

//* ******** getServerSideProps ***********/
//* lo bueno de esto es que se mantiene actualizado via nuestra api , al tener algun cambio de precio o de producto , el cliente siempre tendra los cambios actualizados en todo momento


export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const { data: guitarras } = await respuesta.json() //* desestructuramos data de la respuesta de fetch y la asignamos a guitarras


  return { //* getServerSideProps siempre debe retornar algo que tenga un objeto props : {} , se puede exportar a Tienda como un props comun no hace falta ningun hook
    props: {
      guitarras
    }
  }
}