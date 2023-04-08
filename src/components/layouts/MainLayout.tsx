import { FC } from "react"
import Head from "next/head"
import styles from "./Main.module.css"
import { Navbar } from "../Navbar"
export  const MainLayout : FC =  ({ children }) =>  {
  return (
    <div>
        <Head>
        <title>Home</title>
        <meta name="description" content="Home App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
      {children}
      </main>
    </div>
  )
}
