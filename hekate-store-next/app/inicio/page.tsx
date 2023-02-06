import Link from 'next/link';
import React from 'react'
import styles from './page.module.css'

function Menu() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h3>hekate Store</h3>
        </div>
        <div>
          <Link href="/biblioteca">Bibliteca</Link>
          <Link href="/libros">Libros</Link>
          <Link href="/eventos">Eventos</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/about">Sobre Nosotros</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Menu;
