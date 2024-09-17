import React from 'react'
import styles from "./About.module.css"
import image from "../Images/hero.jpg"

function About() {
  return (
    <main className ={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.h1}>ABOUT ME</h1>
        <p className={styles.p}>EVERY IMAGE IS A METICOULUS <br />COMPOSITION, CAREFULLY CURATED TO <br />EVOKE EMOTION AND PROVOKE THOUGHTS. <br /> WHETHER IT'S A CANDID MOMENT FROZEN <br />IN TIME OR THE GRANDEUR OF NATURE'S <br />SPECTACLE</p>
      </div>
      <div className={styles.right}>
        <div className={styles.rotate}>
        <img src={image} className={styles.image}></img>
        <div className={styles.heroBackgrd}></div>

        </div>
        <div className={styles.normal}>
        <img src={image} className={styles.imageBehind}></img>
        <div className={styles.heroBackgrd1}></div>
        </div>

      </div>
    </main>
  )
}

export default About
