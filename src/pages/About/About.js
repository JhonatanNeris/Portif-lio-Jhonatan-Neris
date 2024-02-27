import React from 'react'

//CSS
import styles from "./About.module.css"

const About = () => {
  return (
    <div className='container'>
        <div className={styles.info}>
            <div className={styles.name}>
                <h1>Olá, eu sou o</h1>
                <h1 className='colored-text'>Jhonatan Neris</h1>
            </div>
            <div className={styles.description}>
                <p>Sou aluno de 4º semestre do curso de Análise e desenvolvimento de sistemas. O meu primeiro contato com a programação foi durante o estudo para concursos públicos e depois disso eu me interessei demais pela área, então em 2022 eu decidi me matricular na faculdade UDF.</p>
            </div>
        </div>
        <div className={styles.curriculum}>
          <div className={styles.item_container}>
            <h2 className='colored-text'>Formações</h2>
            <div className={styles.item}>
              <h3>Análise e Desenvolvimento de sistemas</h3>
              <div className={styles.curriculum_info}>
                <p>Superior de tecnologia em ADS - UDF</p>
                <span>2022 - Presente</span>
              </div>
            </div>
            <div className={styles.item}>
              <h3>Curso superior em Gestão Pública - Graduação</h3>
              <div className={styles.curriculum_info}>
                <p>Curso superior de tecnólogia - Faculdade Unyleya</p>
                <span>2018 - 2021</span>
              </div>
            </div>
            <div className={styles.item}>
              <h3>Ensino médio</h3>
              <div className={styles.curriculum_info}>
                <p>Ensino médio completo - Colégio CIMAN</p>
                <span>2014 - 2016</span>
              </div>
            </div>
          </div>
          <div className={styles.item_container}>
            <h2 className='colored-text'>Cursos e certificados</h2>
            <div className={styles.item}>
              <h3>Formação front-end</h3>
              <div className={styles.curriculum_info}>
                <p>HTML, CSS, JavaScript, React... - Udemy</p>
                <span>25%</span>
              </div>
            </div>
            <div className={styles.item}>
              <h3>C# + Programação orientada a objetos </h3>
              <div className={styles.curriculum_info}>
                <p>C# completo Nélio Alves - Udemy</p>
                <span>35%</span>
              </div>
            </div>
            <div className={styles.item}>
              <h3>Curso de React</h3>
              <div className={styles.curriculum_info}>
                <p>Do zero a maestria - Udemy</p>
                <span>2024</span>
              </div>
            </div>
            <div className={styles.item}>
              <h3>Curso C# completo</h3>
              <div className={styles.curriculum_info}>
                <p>C# completo - Danki.code</p>
                <span>2023</span>
              </div>
            </div>
            <div className={styles.item}>
              <h3>Curso de Banco de dados</h3>
              <div className={styles.curriculum_info}>
                <p>Banco de dados MySql - Danki.code</p>
                <span>2023</span>
              </div>
            </div>
            <div className={styles.item}>
              <h3>Curso de SCRUM</h3>
              <div className={styles.curriculum_info}>
                <p>Curso de SCRUM - Danki.code</p>
                <span>2023</span>
              </div>
            </div>
            <div className={styles.item}>
              <h3>Curso de Javascript</h3>
              <div className={styles.curriculum_info}>
                <p>Curso de Javascript completo - Danki.code</p>
                <span>2023</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About