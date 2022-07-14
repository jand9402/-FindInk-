import React from 'react'
import "./Home.css"
import CardsHome from '../CardsHome/CardsHome'
import video from "../../../assets/videoHome.mp4"
import imagenfindink from "../../../assets/imagenfindink.jpeg"
import { Link } from 'react-router-dom'
import { getTatuadores } from '../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect, useState } from 'react'



const Home = props => {

    const dispatch = useDispatch()
    const allEvents = useSelector((state) => state.all_events)


    useEffect(() => {
        dispatch(getTatuadores())
    }, [dispatch])

    const { route } = props
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h1 className='text_banner1'>¡Conoce a los mejores tatuadores de Colombia!</h1>
                        <h3 className='sub_banner1'>Un sistema creado para ayudarte</h3>
                        <button className='btn_banner1'>ENCUENTRA A TU TATUADOR</button>
                    </div>
                </div>
            </div>
            <CardsHome />
            <div className='contenedorVideoHome'>
                <div className='container'>
                    <div className='row row_video'>
                        <div className='col-lg-6 col_text_video'>
                            <h1 className='title_video_home'>Titulo video</h1>
                            <p className='text_video_home'>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Doloremque quia nemo dignissimos quod aliquam doloribus
                                itaque corporis ducimus possimus. Eius, incidunt! Repellat doloribus tempore
                                provident sed accusantium ullam tempora facere. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Doloremque quia nemo dignissimos quod aliquam doloribus
                                itaque corporis ducimus possimus. Eius, incidunt! Repellat doloribus tempore
                                provident sed accusantium ullam tempora facere.</p>
                            <p className='text_video_home'>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Doloremque quia nemo dignissimos quod aliquam doloribus
                                itaque corporis ducimus possimus. Eius, incidunt! Repellat doloribus tempore
                                provident sed accusantium ullam tempora facere.</p>
                        </div>
                        <div className='col-lg-6 col_video_video justify-content-center'>
                            <video className='video_home' controls>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenedor2">
                <div className="container">
                    <h1 className="title_botones pt-5">¿Eres tatuador?</h1>
                    <div className="row row_3botones">
                        <div className="col-lg-12 mt-4 col_3botones">
                            <Link to="/proyects" className="Links LinkCards">
                                <div className="div_contenedor_botones">
                                    <div className="div_botones">
                                        <Link to='/register'>
                                            <button className='tresbotones'>REGISTRARSE</button>
                                        </Link>
                                        <br />
                                        <button className='tresbotones'>CONTACTANOS</button>
                                        <br />
                                        <button className='tresbotones tresbotonesUltimo'>SABER MAS</button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className='contenedorVideoHome'>
                <div className='container'>
                    <div className='row row_video'>
                        <div className='col-lg-6 col_logo_nosotros'>
                            <img src={imagenfindink} alt="" className='img_nosotros'></img>
                        </div>
                        <div className='col-lg-6 col_text_nosotros'>
                            <h1 className='title_nosotros_home'>Nosotros</h1>
                            <p className='text_nosotros_home'>Quienes somos: Findink es el lugar donde conectamos a los clientes con los artistas del
                                tatuaje por medio de una plataforma digital que invita a la creación de comunidad y así
                                solucionamos dos grande problemáticas de la industria (posicionamiento y búsqueda),
                                generando una competencia leal y por méritos</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home