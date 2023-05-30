import { Html, Head, Main, NextScript } from "next/document"



export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="GuitarLA - Venta de guitarras y blog de musica." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


//* es un archivo especial en Next.js que se utiliza para personalizar el documento HTML base de la aplicación.
//*  A diferencia de los componentes de página normales, el archivo _document.js se ejecuta solo en el servidor y no en el cliente.

//* generar el HTML inicial que se enviará al navegador. Puedes utilizar este archivo para agregar elementos globales al documento HTML,
//*  como etiquetas <head>, estilos globales, metadatos o cualquier otra configuración relacionada con la estructura base del HTML.

//* La etiqueta <Main> representa el componente principal de la página actual. (_app.js)

//* La etiqueta <NextScript> se utiliza para incluir automáticamente los scripts necesarios para el funcionamiento de Next.js,
//*  como el pre-carga y la hidratación del código JavaScript de la aplicación.