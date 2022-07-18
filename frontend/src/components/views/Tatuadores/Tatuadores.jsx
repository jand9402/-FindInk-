import React from 'react'
import "./Tatuadores.css"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import CardsTatuadores from '../CardsTatuadores/CardsTatuadores';
import FilterTatuadores from '../FiltrosTatuadores/Filtros';



const Home = props => {

    const dispatch = useDispatch();
    const allTatuadores = useSelector((state) => state.tatuadores);
    const { route } = props
    return (
        <>
            <div className="container container_test">
                <div className='d-flex justify-content-center'>
                <div className='publicidad_tatuadores_page'>
                    <h1 className="publicdadTitulo">Espacio para publicidad</h1>
                </div>
                </div>
    <div className="filtros">
        <FilterTatuadores/>
    </div>
    <div className="row">
        {allTatuadores.map((t) => {
          return (
              <CardsTatuadores 
              key={t.id} 
              id={t.id} 
              nombre={t.nombre}
              pais={t.pais} 
              estilos={t.estilos}
              ciudad={t.ciudad} 
              foto_de_perfil={t.foto_de_perfil} 
              galeria={t.galeria}
              rate={t.rate}
              visitas={t.visitas} />
          );
        })}
    </div>
    </div>
        </>
    )
}

export default Home