import React from 'react'
//Import do Css
import styles from "./Footer.module.css";

//Import Icons
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='container'>
            <div className={styles.footer}>
                <div className={styles.nav_footer}>
                    <div>
                        <h1>JN</h1>
                    </div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>Sobre</li>
                            <li>Contatos</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer_medias}>
                    <div>&copy; Desenvolvido por Jhonatan Neris</div>
                    <div className={styles.medias}>
                        <div><span><FaLinkedinIn /></span></div>
                        <div><span><FiGithub /></span></div>
                        <div><span><FaInstagram /></span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer