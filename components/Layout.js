import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cape Town Photography</title>
        <meta name="description" content="Capturing the beauty of Cape Town through photography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            Cape Town Lens
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Cape Town Photography. All rights reserved.</p>
      </footer>
    </div>
  );
} 