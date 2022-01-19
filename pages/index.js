import Head from "next/head";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
    <title>
      Next JS Demo Project
    </title>
    </Head>    
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, a numquam explicabo aut excepturi quos tempora aspernatur ratione magni deleniti expedita repellendus necessitatibus laborum. Quibusdam tempore velit aliquid repudiandae nisi.</p>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, a numquam explicabo aut excepturi quos tempora aspernatur ratione magni deleniti expedita repellendus necessitatibus laborum. Quibusdam tempore velit aliquid repudiandae nisi.</p>
    </div>
    </>
  )
}
