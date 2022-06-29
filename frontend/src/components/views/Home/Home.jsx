import React from 'react'
import Layout from '../../Layout'
import { renderRoutes } from '../../../routes/RouteUtils'
import NavbarVisit from '../NavbarVisit/NavbarVisit'
import banner from "../../../assets/banner1.png"
import "./Home.css"
import CardsHome from '../CardsHome/CardsHome'

const Home = props => {
    const { route } = props
    return (
        <>
            <NavbarVisit />
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h1 className='text_banner1'>¡Conoce a los mejores tatuadores de Colombia!</h1>
                        <h3 className='sub_banner1'>Un sistema creado para ayudarte</h3>
                        <button className='btn_banner1'>ENCUENTRA A TU TATUADOR</button>
                    </div>
                </div>
            </div>
            <CardsHome/>
        </>
    )
}

export default Home