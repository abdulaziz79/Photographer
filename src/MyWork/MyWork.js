import React from 'react'
import styles from "./MyWork.module.css"
import image from "../Images/hero.jpg"

function MyWork() {
  return (
    <main className={styles.All}>
      <div className={styles.top}>
        
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
