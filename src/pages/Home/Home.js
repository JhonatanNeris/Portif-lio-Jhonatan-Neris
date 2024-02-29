import React from 'react'

import styles from "./Home.module.css"

import { Link } from 'react-router-dom'

import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    <div className='container'>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>Olá, eu sou o Jhonatan Neris,</h3>
          <h4>desenvolvedor fullstack.</h4>
          <p>Estudante de 4º semestre em Análise e Desenvolvimento de Sistemas pela faculdade UDF em Brasília-DF. Desenvolvimento Web e full stack.</p>
          <div className={styles.buttons}>
            <Link to="/contacts" className={styles.btn_color}>Entre em contato</Link>
            <Link to="/projects" className={styles.btn_outline}>Ver projetos</Link>
          </div>

        </div>
        <div className={styles.right}>
          <img src="photo2.jpg" alt="minha foto" />
        </div>
      </div>
      <div className={styles.container_projects}>
        <div className={styles.title}>
          <h2>Projetos populares</h2>
          <p>Selecionei alguns dos meus melhores projetos para te encantar...</p>
        </div>
        <div className={styles.project}>
          <div className={styles.project_img}>
            <img src="Home2.png" alt="imagem do projeto" />
          </div>
          <div className={styles.project_right}>
            <h3>MiniBlog</h3>
            <p>Projeto desenvolvido com React. O banco de dados foi desenvolvido com o Firebase e possui recursos de autenticação de usuário. Utiliza React Router, Context entre outras técnicas</p>
            <div className={styles.buttons}>
              <Link to="https://github.com/JhonatanNeris/miniBlog" target="_blank" className='btn-outline icon'><span><FaGithub /></span>Ver código</Link>
              <Link to="https://mini-blog-eight-mu.vercel.app/" target="_blank" className='btn-color icon'>Ver aplicação</Link>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.project_img}>
            <img src="todo.png" alt="imagem do projeto" />
          </div>
          <div className={styles.project_right}>
            <h3>Todo List + Local Storage</h3>
            <p>Projeto desenvolvido com React. O banco de dados foi desenvolvido com o Firebase e possui recursos de autenticação de usuário. Utiliza React Router, Context entre outras técnicas</p>
            <div className={styles.buttons}>
              <Link to="https://github.com/JhonatanNeris/TodoList-LocalStorage" target="_blank" className='btn-outline icon'><span><FaGithub /></span>Ver código</Link>
              <Link to="https://todo-list-local-storage.vercel.app/" target="_blank" className='btn-color icon'>Ver aplicação</Link>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.project_img}>
            <img src="CineFan.png" alt="imagem do projeto" />
          </div>
          <div className={styles.project_right}>
            <h3>Projeto CineFan + API TMDb</h3>
            <p>Projeto feito com Javascript puro. Consome uma API de filmes, séries e programas de TV e faz a listagem de alguns desses dados. O usuário pode realizar uma pesquisa que irá retornar cards com os resultados encontrados na API. A aplicação também possui modelos de carousel de imagens.</p>
            <div className={styles.buttons}>
              <Link to="https://github.com/JhonatanNeris/CineFan" target="_blank" className='btn-outline icon'><span><FaGithub /></span>Ver código</Link>
              <Link to="https://cine-fan.vercel.app/" target="_blank" className='btn-color icon'>Ver aplicação</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.languages}>
        <h1 className='colored-text'>Habilidades</h1>
        <p>Aqui você pode ver um pouco das minhas habilidades como desenvolvedor. Estão listadas da maior para menor de acordo com minhas experincias...</p>
        <div className={styles.container_languages}>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="htmlLogo.svg" alt="logo html" />
            </div>
            <h2>HTML</h2>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="cssLogo.svg" alt="logo css" />
            </div>
            <h2>CSS</h2>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="jsLogo.svg" alt="logo js" />
            </div>
            <h2>Javascript</h2>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="reactLogo.svg" alt="logo react" />
            </div>
            <h2>React</h2>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="bdLogo.svg" alt="logo bd" />
            </div>
            <h2>Banco de dados</h2>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="pyLogo.svg" alt="logo bd" />
            </div>
            <h2>Python</h2>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="c.svg" alt="logo C#" />
            </div>
            <h2>C#</h2>
          </div>


        </div>
        <div className={styles.message}>
          <h2>Transforme ideias em soluções completas, criando experiências digitais impactantes.</h2>
          <div className={styles.link}>
            <div className={styles.button}>
              <Link className='colored-text' to="/contacts">Vamos trabalhar Juntos!
                <svg width="0" height="0" >
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop stopColor="#b16cea" offset="0%" />
                    <stop stopColor="#ff5e69" offset="40%" />
                    <stop stopColor="#ffa84b" offset="100%" />
                  </linearGradient>
                </svg>
                <MdArrowOutward style={{ fill: "url(#gradient)", fontSize: "3rem" }} />
              </Link>

            </div>

          </div>


        </div>

      </div>

    </div>

  )
}

export default Home