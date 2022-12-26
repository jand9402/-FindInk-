import React from "react";
import { Link } from "react-router-dom";
import './CardsTatuadores.css'
import estrellas from "../../assets/estrellas.png"



function CardsTatuadores({id, nombre, pais, estilos, ciudad, foto_de_perfil, galeria, rate, visitas}){

return(
  <div className="col-md-4 mb-4">
    <Link className="link_none" to={"/detail/" + id}>
  <div class="card card_tatuadores" >
    <div className="oculto_img_card">
      <p className="estilo_tatuador_card">{estilos}</p>
      <button className="like_cora_button">
        <span>
        <i class="fa fa-heart-o"></i> 
        </span>
      </button>
  </div>
  <img src={foto_de_perfil} class="card-img-top" alt="..."/>
  {/* <div class="card-body">
    <h5 class="card-title">{nombre}</h5>
    <img src={estrellas} class="estrellas" alt={nombre}/>
    <p className="visitas">Número de visitas: {visitas}</p>
  </div>
  <ul class="list-group list-group-tatuadores list-group-flush">
    <li class="list-group-item list-group-tatuadores">{pais}</li>
    <li class="list-group-item list-group-tatuadores">{ciudad}</li>
    <li class="list-group-item list-group-tatuadores">Estilo principal: {estilos}</li>
  </ul> */}
</div>
</Link>
</div>
)
}

export default CardsTatuadores