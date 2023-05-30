import Head from "next/head"
import Footer from "./footer"
import Header from "./header"


export default function Layout({ children, title = '', description = '' }) {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name='description' content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

//* se utiliza para envolver y proporcionar una estructura común o diseño compartido a todas las páginas de un sitio web.
//* Proporciona una manera conveniente de definir elementos como encabezados, pies de página, barras de navegación u otros componentes que se repiten en todas las páginas.