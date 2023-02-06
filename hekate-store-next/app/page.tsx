import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import logo from '../assets/logosinfondo.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>HEKATE STORE</h1>
        <Link href="/inicio" className={styles.myButton}>ENTRAR</Link>
        
      </div>
    </main>
  )
}
