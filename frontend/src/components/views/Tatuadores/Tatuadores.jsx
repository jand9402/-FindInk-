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
    <div className="TituloEventos">
    {/* <h1 className='titulo_tatuadores'>Tatuadores</h1> */}
        <FilterTatuadores/>
    </div>
    <div className="row">
        {allTatuadores.map((t) => {
          return (
              <CardsTatuadores key={t.id} 
              nombre={t.nombre}
              pais={t.pais} 
              estilos={t.estilos}
              ciudad={t.ciudad} 
              foto_de_perfil={t.foto_de_perfil} 
              galeria={t.galeria}
              rate={t.rate}
              visitantes={t.visitantes} />
          );
        })}
    </div>
    </div>
        </>
    )
}

export default Home