import React from "react";
import './CardsHome.css'
import { Link } from "react-router-dom";


export default function CardsHome() {

    return (
        <div className="contenedor1">
            <div className="container">
                <h1 className="title_cardsHome">¿Que te gustaria hacer?</h1>
            <div className="row row_cards">
            <div className="col-lg-4 mt-4 col_cards">
                <Link to="/proyects" className="Links LinkCards">
                    <div class="card card_img1">
                            <div class="card-body">
                                <a href="#" class="btn btn-primary">Ver tatuadores</a>
                            </div>
                    </div>
                </Link>
            </div>

            <div className="col-lg-4 mt-4 col_cards">
                <Link to="/proyects" className="Links LinkCards">
                    <div class="card card_img2">
                            <div class="card-body">
                                <a href="#" class="btn btn-primary">Ver estilos</a>
                            </div>
                    </div>
                </Link>
            </div>

            <div className="col-lg-4 mt-4 col_cards">
                <Link to="/proyects" className="Links LinkCards">
                    <div class="card card_img3">
                            <div class="card-body">
                                <a href="#" class="btn btn-primary">Ir al marketplace</a>
                            </div>
                    </div>
                </Link>
            </div>
            </div>
            </div>
        </div>
    )
}