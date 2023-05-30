import Link from "next/link"
import { useRouter } from "next/router" //*  usamos el hook para extraer en que ruta estamos
import styles from '../styles/footer.module.css' //* cargamos los estilos



export default function Footer() {
   const router = useRouter() //* extraemos en que ruta estamos , router.pathname nos dice donde estamos
   return (
      <footer className={styles.footer}>
         <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
               <Link href='/' className={router.pathname === '/' ? styles.active : ''}>Inicio</Link>
               <Link href='/nosotros' className={router.pathname === '/nosotros' ? styles.active : ''}> Nosotros </Link>
               <Link href='/blog' className={router.pathname === '/blog' ? styles.active : ''}> Blog </Link>
               <Link href='/tienda' className={router.pathname === '/tienda' ? styles.active : ''}> Tienda</Link>
            </nav>
            <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}.</p>
         </div>
      </footer>
   )
}


//* si la ruta en la que estamos es igual a la ruta del Link , le ponemos la clase active de lo contrario nada