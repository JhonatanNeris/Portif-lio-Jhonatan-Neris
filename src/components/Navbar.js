import React, {useState} from 'react'

//Import do Css
import styles from "./Navbar.module.css";

//import do React Router
import { NavLink, Link } from 'react-router-dom';

//Icons
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("menu", menuOpen)
  };

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_left}>
          <div className={styles.logo}>
            <h2>JN</h2>
          </div>
          <div className={styles.menu_toggle}>
            <div  onClick={toggleMenu}><IoMdMenu /></div>
          </div>
          <div className={menuOpen ? `${styles.links} ${styles.open}` : styles.links}>
          {/* <div className={menuOpen ? styles.menuOpen : styles.links}> */}
          {/* <div className={styles.links}> */}
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.active : "")} onClick={toggleMenu}>Projetos</NavLink>
            {/* <NavLink to="/certificates" className={({ isActive }) => (isActive ? styles.active : "")}>Certificados</NavLink> */}
            <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")} onClick={toggleMenu}>Sobre mim</NavLink>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? styles.active : "")} onClick={toggleMenu}>Contatos</NavLink>
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