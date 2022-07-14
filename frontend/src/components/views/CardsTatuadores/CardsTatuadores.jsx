import React from "react";
import { Link } from "react-router-dom";
import './CardsTatuadores.css'
import estrellas from "../../../assets/estrellas.png"



function CardsTatuadores({id, nombre, pais, estilos, ciudad, foto_de_perfil, galeria, rate, visitantes}){

return(
  //   <div className="col-md-3 mb-4 card card_tatuador">
  // <img src={foto_de_perfil} class="card-img-top" alt={nombre}/>
  // <div class="card-body card-body-tatuadores">
  //   <h5 class="card-title">{nombre}</h5>
  //   <img src={estrellas} class="estrellas" alt={nombre}/>
  // </div>
  // <ul class="list-group list-group-tatuadores list-group-flush">
  //   <li class="list-group-tatuadores list-group-item list-group-item-evento">Pais: {pais}</li>
  //   <li class="list-group-tatuadores list-group-item list-group-item-evento">Ciudad: {ciudad}</li>
  //   <li class="list-group-tatuadores list-group-item list-group-item-evento">Estilos: {estilos}</li>
  // </ul>
  // </div>
  <div className="col-md-3 mb-4">
  <div class="card card_tatuadores" >
  <img src={foto_de_perfil} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{nombre}</h5>
    <img src={estrellas} class="estrellas" alt={nombre}/>
  </div>
  <ul class="list-group list-group-tatuadores list-group-flush">
    <li class="list-group-item list-group-tatuadores">{pais}</li>
    <li class="list-group-item list-group-tatuadores">{ciudad}</li>
    <li class="list-group-item list-group-tatuadores">Estilo principal: {estilos}</li>
  </ul>
</div>
</div>
)
}

export default CardsTatuadores