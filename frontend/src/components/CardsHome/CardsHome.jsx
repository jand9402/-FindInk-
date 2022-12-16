import React from "react";
import './CardsHome.css'
import { Link } from "react-router-dom";


export default function CardsHome() {

    return (
        <div className="contenedor1">
            <div className="container">
            <div className="row row_cards">
            <div className="col-lg-4 mt-4 col_cards">
                <Link to="/tatuadores" className="Links LinkCards">
                    <div class="card all_cards card_img1">
                        <div className="testCardsBG">
                            <div class="card-body">
                                <h2 className="titulo_ver_tatuadores">01.</h2>
                            </div>
                            </div>
                    </div>
                </Link>
            </div>

            <div className="col-lg-4 mt-4 col_cards">
                <Link to="/proyects" className="Links LinkCards">
                    <div class="card all_cards card_img2">
                    <div className="testCardsBG">
                            <div class="card-body">
                            <h2 className="titulo_ver_tatuadores">02.</h2>
                            </div>
                            </div>
                    </div>
                </Link>
            </div>

            <div className="col-lg-4 mt-4 col_cards mb-5">
                <Link to="/proyects" className="Links LinkCards">
                    <div class="card all_cards card_img3">
                    <div className="testCardsBG">
                            <div class="card-body">
                            <h2 className="titulo_ver_tatuadores">03.</h2>
                            </div>
                            </div>
                    </div>
                </Link>
            </div>
            </div>
            </div>
        </div>
    )
}