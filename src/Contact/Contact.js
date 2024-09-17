import React from 'react'
import styles from "./Contact.module.css"
import image from "../Images/hero.jpg"

function Contact() {
  return (
    <main className={styles.container}>
      <div className={styles.p}>CONTACT</div>
      <img src={image} className={styles.image} />
   
    </main>
  )
}

export default Contact
