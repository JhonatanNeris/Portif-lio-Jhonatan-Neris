import React from 'react'
//Import do Css
import styles from "./Banner.module.css";


const Banner = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h3>Olá, eu sou o Jhonatan,</h3>
            <h4>desenvolvedor fullstack.</h4>

        </div>
        <div className={styles.right}>

        </div>

    </div>
  )
}

export default Banner