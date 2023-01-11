import {
    ALL_TATUADORES,
    FILTER_BY_CITY,
    FILTER_BY_COUNTRY,
    GET_TATUADORES,
    FILTER_BY_STYLE
} from "../actions";


const initialState = {
    tatuadores: [
        {
            nombre_real: "Andres Arenas",
            nombre: "Aregui Kun",
            id: 1,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Cartoon",
            foto_de_perfil: "https://i.pinimg.com/originals/ce/cc/ae/ceccaeac3081121af892bae6c2aa7d7d.jpg  ",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 2568542
        },
        {
            nombre_real: "Tatuador 2",
            nombre: "Tatuador 2",
            id: 2,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Acuarela",
            foto_de_perfil: "https://www.esdip.com/wp-content/uploads/2019/09/Cu%C3%A1nto-gana-un-tatuador.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 6
        }, {
            nombre_real: "Tatuador 3",
            nombre: "Tatuador 3",
            id: 3,
            pais: "Colombia",
            ciudad: "Bogota",
            estilos: "Realismo",
            foto_de_perfil: "https://logiabarcelona.com/wp-content/uploads/2015/11/bangbang2f-1-web.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 35
        }, {
            nombre_real: "Tatuador 4",
            nombre: "Tatuador 4",
            id: 4,
            pais: "Mexico",
            ciudad: "Leon",
            estilos: "Blackwork",
            foto_de_perfil: "https://cdn.elnacional.com/wp-content/uploads/2018/01/alex-bruz-cotiza-como-mejor-tatuador-venezuela_220109.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 12
        },  {
            nombre_real: "Tatuador 7",
            nombre: "Tatuador 7",
            id: 7,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Acuarela",
            foto_de_perfil: "https://cdn.forbes.co/2022/01/NFT-4.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 9
        }, {
            nombre_real: "Tatuador 8",
            nombre: "Tatuador 8",
            id: 8,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Gótico",
            foto_de_perfil: "https://www.bacanika.com/images/TATUADORES_J%C3%93VENES/Curzi.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 0
        }
    ],
    tatuadores2: [
        {
            nombre_real: "Andres Arenas",
            nombre: "Aregui Kun",
            id: 1,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Cartoon",
            foto_de_perfil: "https://i.pinimg.com/originals/ce/cc/ae/ceccaeac3081121af892bae6c2aa7d7d.jpg  ",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 2568542
        },
        {
            nombre_real: "Tatuador 2",
            nombre: "Tatuador 2",
            id: 2,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Acuarela",
            foto_de_perfil: "https://www.esdip.com/wp-content/uploads/2019/09/Cu%C3%A1nto-gana-un-tatuador.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 6
        }, {
            nombre_real: "Tatuador 3",
            nombre: "Tatuador 3",
            id: 3,
            pais: "Colombia",
            ciudad: "Bogota",
            estilos: "Realismo",
            foto_de_perfil: "https://logiabarcelona.com/wp-content/uploads/2015/11/bangbang2f-1-web.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 35
        }, {
            nombre_real: "Tatuador 4",
            nombre: "Tatuador 4",
            id: 4,
            pais: "Mexico",
            ciudad: "Leon",
            estilos: "Blackwork",
            foto_de_perfil: "https://cdn.elnacional.com/wp-content/uploads/2018/01/alex-bruz-cotiza-como-mejor-tatuador-venezuela_220109.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 12
        }, {
            nombre_real: "Tatuador 7",
            nombre: "Tatuador 7",
            id: 7,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Acuarela",
            foto_de_perfil: "https://cdn.forbes.co/2022/01/NFT-4.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 9
        }, {
            nombre_real: "Tatuador 8",
            nombre: "Tatuador 8",
            id: 8,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Gótico",
            foto_de_perfil: "https://www.bacanika.com/images/TATUADORES_J%C3%93VENES/Curzi.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 0
        }
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TATUADORES:
            return {
                ...state
            }
        case FILTER_BY_COUNTRY:
            let paises = state.tatuadores
            let pais = action.payload
            let paisesFiltered = pais === 'all' ? paises : paises.filter((e) => e.pais === pais)

            return {
                ...state,
                tatuadores: paisesFiltered
            }
        case FILTER_BY_CITY:
            let ciudades = state.tatuadores
            let ciudad = action.payload
            let ciudadesFiltered = ciudad === 'all' ? ciudades : ciudades.filter((e) => e.ciudad === ciudad)

            return {
                ...state,
                tatuadores: ciudadesFiltered
            }
        case FILTER_BY_STYLE:
            let estilos1 = state.tatuadores
            let estilos = action.payload
            let cestilosFiltered = estilos === 'all' ? estilos1 : estilos1.filter((e) => e.estilos === estilos)

            return {
                ...state,
                tatuadores: cestilosFiltered
            }
        case ALL_TATUADORES:
            let allTatuadores = state.tatuadores2
            return {
                ...state,
                tatuadores: allTatuadores
            }
        default: return { ...state }

    };
};

export default rootReducer;
