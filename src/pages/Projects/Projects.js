import React from 'react'

//import styles
import styles from "./Projects.module.css"
import { Link } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


const Projects = () => {
    
    return (
        <div className='container'>
            <div className={styles.title}>
                <h1 className='colored-text'>Meus Projetos</h1>
            </div>
            <div className={styles.container_projects}>
                <div className={styles.project}>
                    <div className={styles.info}>
                        <h2>Ponto de vendas + acompanhamento de pedidos</h2>
                        <p>Esse é o meu projeto mais completo e que ainda está <strong>em desenvolvimento</strong>. Essa aplicação é um desenvolvimento particular e por isso seu código não está compartilhado. O usuário é capaz de criar e editar seu cardápio, realizar pedidos no caixa e também acompanhar os pedidos na tela de cozinha. Aplicação feita para automatização em lanchonetes e restaurantes.</p>
                        <div style={{ display: 'inline-block' }}>
                            <Link className='btn-color'>Ver projeto</Link>
                        </div>

                    </div>
                    <div className={styles.preview}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            // spaceBetween={1}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            autoplay={{delay: 5000}}
                        >
                            <SwiperSlide className={styles.slider}>
                                    <img src="caixa.png" alt="slider" />
                            </SwiperSlide>
                            <SwiperSlide>
                                    <img src="cozinha.png" alt="slider" />
                            </SwiperSlide>
                            <SwiperSlide>
                                    <img src="cardapio.png" alt="slider" />
                            </SwiperSlide>
                            {/* {mangDogData.map((item)=> {
                                <SwiperSlide key={item.id}>
                                    <img src={item.image} alt="slider" />
                                </SwiperSlide>

                            })} */}
                            
                            
                        </Swiper>
                        {/* <iframe
                            width="544"
                            height="306"
                            src="https://www.youtube.com/embed/hnxkAvS7qsA?si=NKmo3X9quS3XHWta"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe> */}
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.preview}>
                        <img src="Home2.png" alt="" />
                    </div>
                    <div className={styles.info}>
                        <h2>Projeto MiniBlog + Firebase</h2>
                        <p>Projeto feito com React, Html, CSS e Javascript. Utiliza os maiores recursos do react como context, react routes e hooks. O projeto miniblog possui recursos de autenticação e login de usuário. O usuário pode criar, excluir e editar seus posts através de uma dashboard, além de pesquisar através de tags.</p>
                        <div style={{ display: 'inline-block' }}>
                            <Link className='btn-color'>Ver projeto</Link>
                        </div>

                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.info}>
                        <h2>Todo List Avançado + Local Storage</h2>
                        <p>Projeto feito com Javascript puro, Html e Css. O usuário pode realizar um CRUD com as tarefas e como recurso adicional pode pesquisar e filtrar as tarefas que deseja exibir. Esse foi meu primeiro projeto que utiliza a local storage de navegadores.</p>
                        <div style={{ display: 'inline-block' }}>
                            <Link to="https://todo-list-local-storage.vercel.app/" className='btn-color'>Ver projeto</Link>
                        </div>
                    </div>
                    <div className={styles.preview}>
                        <img src="todo.png" alt="" />
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.preview}>
                        <img src="CineFan.png" alt="" />
                    </div>
                    <div className={styles.info}>
                        <h2>Projeto CineFan + API TMDb</h2>
                        <p>Projeto feito com Javascript puro. Consome uma API de filmes, séries e programas de TV e faz a listagem de alguns desses dados. O usuário pode realizar uma pesquisa que irá retornar cards com os resultados encontrados na API. A aplicação também possui modelos de carousel de imagens.</p>
                        <div style={{ display: 'inline-block' }}>
                            <Link className='btn-color'>Ver projeto</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.info}>
                        <h2>Tabuada feito com React</h2>
                        <p>Este projeto é uma replica de um projeto que eu fiz utilizando o Javascript puro, recriei as mesmas funcionalidades e o mesmo design só que desta vez utilizando o React. </p>
                        <div style={{ display: 'inline-block' }}>
                            <Link className='btn-color'>Ver projeto</Link>
                        </div>
                    </div>
                    <div className={styles.preview}>
                        <img src="tabuada.png" alt="" />
                    </div>
                </div>

            </div>
            <div className='flex-center' style={{ marginTop: '5rem' }}>
                <Link to="https://github.com/JhonatanNeris?tab=repositories" className='btn-outline flex-center'>Ver Todos os projetos</Link>
            </div>
        </div>
    )
}

export default Projects