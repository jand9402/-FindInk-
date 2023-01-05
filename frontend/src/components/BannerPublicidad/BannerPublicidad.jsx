import React from "react";
import './BannerPublicidad.css'
import { Link } from "react-router-dom";


export default function BannerPublicidad() {

    return (
        <div className="contenedorBannerPublicidad">
            <img className="bannerPublicidad" src="./imagenes/publicidadbanner.png" alt="Publicidad" />
        </div>
    )
}