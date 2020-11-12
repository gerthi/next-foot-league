import Head from "next/head";
import styles from "./Layout.module.scss";

export default function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        {children}
      </main>

      <footer className={styles.footer}>Powered by Thiger &copy; 2020</footer>
    </div>
  );
}
