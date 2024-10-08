import React from 'react'
import styles from "./Hero.module.css"
import Header from '../Navbar/Navbar'
import image from "../Images/hero.jpg"

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
        <div className={styles.heroBackgrd}></div>
        {/* <div className={styles.heroBackgrd} ></div> */}
        <img src={image} className={styles.img} alt='hero'></img>
        <p className={styles.pLeft}> AN-AWARD WINNIG<br/> PHOTOGRAPHER WHOSE LENS<br /> TRANSFORMS MOMENTS INTO<br /> TIMELESS MASTERPIECES</p>
          <p className={styles.pRight}>SCROLL <br /> MORE</p>
          <div className={styles.frame}>
            FRAMEUP
            <div className={styles.heroBackgrd1}></div>
          </div>
      </div>

    </div>
  )
}

export default Hero
