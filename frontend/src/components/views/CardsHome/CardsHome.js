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
                    <div class="card all_cards card_img1">
                            <div class="card-body">
                                <h2 className="titulo_ver_tatuadores">Ver tatuadores</h2>
                                <p className="parrafo_ver_tatuadores">¡YA ESTA AQUI! La mejor forma de encontrar tu tatuador ideal 
                                    entra y busca a tu tatuador según tu ubicación, estilos 
                                    preferidos, rangos de precios, mejores calificados y además 
                                    encuentra sus agendas para reservar tu cita. </p>
                            </div>
                    </div>
                </Link>
            </div>

            <div className="col-lg-4 mt-4 col_cards">
                <Link to="/proyects" className="Links LinkCards">
                    <div class="card all_cards card_img2">
                            <div class="card-body">
                            <h2 className="titulo_ver_tatuadores">Ver estilos</h2>
                                <p className="parrafo_ver_tatuadores">¿Aun no sabes que quieres? Entra aquí y 
                                mira todos los estilos y posibilidades que tienes para escoger, 
                                además recuerda que puedes encontrar a los tatuadores mas tesos en tu estilo preferido, 
                                entra ya y descubre todas las posibilidades</p>
                            </div>
                    </div>
                </Link>
            </div>

            <div className="col-lg-4 mt-4 col_cards mb-5">
                <Link to="/proyects" className="Links LinkCards">
                    <div class="card all_cards card_img3">
                            <div class="card-body">
                            <h2 className="titulo_ver_tatuadores">Ir al marketplace</h2>
                                <p className="parrafo_ver_tatuadores">Entra a nuestro Marketplace y 
                                encuentra todo lo que necesitas. Podrás encontrar productos para tatuadores 
                                como maquinas, tintas, agujas etc., Hasta nuevos diseños inéditos 
                                completamente disponibles para que te hagas tu nuevo tatuaje</p>
                            </div>
                    </div>
                </Link>
            </div>
            </div>
            </div>
        </div>
    )
}