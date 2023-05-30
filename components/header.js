import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import logo from '../public/img/logo.svg' //* cargamos el logo
import styles from '../styles/header.module.css' //* cargamos los estilos


export default function Header() {
    const router = useRouter() //* usamos el hook , para ver en que ruta estamos
    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Image src={logo.src} alt="logo imagen" width={300} height={40} />

                <nav className={styles.navegacion}>
                    <Link href='/' className={router.pathname === '/' ? styles.active : ''}>Inicio</Link>
                    <Link href='/nosotros' className={router.pathname === '/nosotros' ? styles.active : ''}> Nosotros </Link>
                    <Link href='/blog' className={router.pathname === '/blog' ? styles.active : ''}> Blog </Link>
                    <Link href='/tienda' className={router.pathname === '/tienda' ? styles.active : ''}> Tienda</Link>
                    <Link className='clases' href='/carrito'><Image src="/img/carrito.png" width={30} height={25} alt="carrito" /> </Link>
                </nav>
            </div>
        </header>
    )
}

//* Header de nuestra app