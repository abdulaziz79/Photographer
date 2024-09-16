import React from 'react'
import styles from "./MyWork.module.css"
import image from "../Images/hero.jpg"
import icon from "../Images/chevron.png"

function MyWork() {
  return (
    <main className={styles.All}>
      <div className={styles.top}>
        <div className={styles.yearScroll}>
          <p className={styles.pYear}>2023</p>
          <div style={{display:"flex", gap:"40px"}}>
          <img className={styles.rotateIcon} src={icon}></img>
          <img style={{width:"70px", opacity:"0.8", cursor:"pointer"}} src={icon}></img>
          </div>
        </div>
        <div className={styles.text}>
          <h2 className={styles.h2}>MY WORKS</h2>
          <p className={styles.p}>EVERY IMAGE IS A METICOULUS <br />COMPOSITION, CAREFULLY CURATED TO <br />EVOKE EMOTION AND PROVOKE THOUGHTS. <br /> WHETHER IT'S A CANDID MOMENT FROZEN <br />IN TIME OR THE GRANDEUR OF NATURE'S <br />SPECTACLE</p>
        </div>
      </div>
      <div className={styles.bottom}>
      <div className={styles.bottomTop}>
        <div className={styles.topLeft}>
        <div className={styles.topOnce}>
        <img src={image} className={styles.img}></img>
        </div>
          <div className={styles.topBoth}>
            <img src={image} className={styles.both}></img>
            <img src={image} className={styles.both}></img>
          </div>
        </div>
        <img src={image} className={styles.tall}></img>
      </div>
      <div className={styles.bottomBottom}>
     
          <img src={image} className={styles.img2} />

      <div className={styles.bottomRight}>
        <div className={styles.both2}>
          <img src={image} className={styles.rotate}></img>
          <img src={image} className={styles.rotate2}></img>
        </div>
        <div className={styles.bottomOnce}>
        <img src={image} className={styles.img}></img>
        </div>
      </div>
      </div>
      </div>
      
    </main>
  )
}

export default MyWork
