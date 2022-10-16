import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Home - Next Tutorial</title>
      </Head>
      <Link href="about">About</Link>
      <h1 className={styles.homeTitle}>Welcome Home</h1>
    </div>
  )
}
