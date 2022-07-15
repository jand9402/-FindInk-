import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./DetailTatuador.css";

export default function DetailEvent(){

    let {id} = useParams()
    console.log(id)

    const allTatuadores = useSelector((state) => state.tatuadores2);
    let current = null

    allTatuadores.map(tatuador => {
        if(tatuador.id == id){
            current = tatuador
        }
    })

    return(
        <>
        <div className="container">
          <div className="row row_img_perfil">
            <div className="foto_perfil">
              <img className="foto_circular" src={current.foto_de_perfil} alt={current.nombre}/>
            </div>
          </div>
          <div className="row row_info_tatuador">
            <div className="col col_galeria">
              <div className="row rowgaleria">
            {current.galeria.map((event) => {
          return (
            <div className="col-md-4 mb-4 colgaleria">
              <img className="foto_galeria" src={event} alt={current.nombre}/>
            </div>
          );
        })}
        </div>
            </div>
          </div>
        </div>
        </>
    )
}


