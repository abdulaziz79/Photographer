import React from 'react'
import style from "./Services.module.css"
import icon from "../Images/chevron.png"

function Services() {
  return (
    <main className={style.container}>
      <div className={style.left}>
        <h1 className={style.h1}>
          MY SERVICES
        </h1>
        <p className={style.p}>
          WHETHER IT'S CAPTURING THE <br />ESSENCE OF A CORPORATE <br />EVENT, IMMORTALIZINNG A <br />COUPLE SPECIAL'S DAY, OR <br />COLLABORATING ON ARTISTIC <br />PROJECTS
        </p>
      </div>
      <div className={style.right}>
        <div className={style.desc}>
          <img src={icon} className={style.icon} />
          <h2 className={style.h2}>PORTRAITURE</h2>
        </div>
        <div className={style.desc}>
          <img src={icon} className={style.icon} />
          <h2 className={style.h2}>EVENT COVERAGE</h2>
        </div>
        <div className={style.desc}>
          <img src={icon} className={style.icon} />
          <h2 className={style.h2}>COMMERCIAL PHOTO</h2>
        </div>
        <div className={style.desc}>
          <img src={icon} className={style.icon} />
          <h2 className={style.h2}>WEDDING PHOTO</h2>
        </div>
        <div className={style.desc}>
          <img src={icon} className={style.icon} />
          <h2 className={style.h2}>FINE ART PHOTO</h2>
        </div>
      </div>
    </main>
  )
}

export default Services
