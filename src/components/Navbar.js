import React from 'react'

//Import do Css
import styles from "./Navbar.module.css";

//import do React Router
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_left}>
          <div className={styles.logo}>
            <h2>JN</h2>
          </div>
          <div className={styles.links}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.active : "")}>Projetos</NavLink>
            {/* <NavLink to="/certificates" className={({ isActive }) => (isActive ? styles.active : "")}>Certificados</NavLink> */}
            <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>Sobre</NavLink>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? styles.active : "")}>Contatos</NavLink>
          </div>
        </div>
        <div className={styles.nav_right}>
          <div className={styles.button}>
            <Link to="/contacts">Entre em contato</Link>
          </div>

        </div>
      </div>

    </nav>

  )
}

export default Navbar