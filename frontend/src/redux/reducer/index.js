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
            nombre: "Aregui",
            id: 1,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Cartoon",
            foto_de_perfil: "https://i.pinimg.com/originals/ce/cc/ae/ceccaeac3081121af892bae6c2aa7d7d.jpg  ",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        },
        {
            nombre_real: "Tatuador 2",
            nombre: "Tatuador 2",
            id: 1,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Acuarela",
            foto_de_perfil: "https://www.esdip.com/wp-content/uploads/2019/09/Cu%C3%A1nto-gana-un-tatuador.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }, {
            nombre_real: "Tatuador 3",
            nombre: "Tatuador 3",
            id: 1,
            pais: "Colombia",
            ciudad: "Bogota",
            estilos: "Realismo",
            foto_de_perfil: "https://logiabarcelona.com/wp-content/uploads/2015/11/bangbang2f-1-web.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }, {
            nombre_real: "Tatuador 4",
            nombre: "Tatuador 4",
            id: 1,
            pais: "Mexico",
            ciudad: "Leon",
            estilos: "Blackwork",
            foto_de_perfil: "https://cdn.elnacional.com/wp-content/uploads/2018/01/alex-bruz-cotiza-como-mejor-tatuador-venezuela_220109.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }, {
            nombre_real: "Tatuador 5",
            nombre: "Tatuador 5",
            id: 1,
            pais: "Colombia",
            ciudad: "Cali",
            estilos: "Neotradicional",
            foto_de_perfil: "https://www.radiorafaela.com.ar/wp-content/uploads/2021/09/I4PZI3PSQBEX7JBAKXFS35BJZE.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }, {
            nombre_real: "Tatuador 6",
            nombre: "Tatuador 6",
            id: 1,
            pais: "Colombia",
            ciudad: "Bogota",
            estilos: "Acuarela",
            foto_de_perfil: "https://tattop.com/files/2017/08/tatu-300x300.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }, {
            nombre_real: "Tatuador 7",
            nombre: "Tatuador 7",
            id: 1,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Acuarela",
            foto_de_perfil: "https://cdn.forbes.co/2022/01/NFT-4.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }, {
            nombre_real: "Tatuador 8",
            nombre: "Tatuador 8",
            id: 1,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Gótico",
            foto_de_perfil: "https://www.bacanika.com/images/TATUADORES_J%C3%93VENES/Curzi.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }
    ],
    tatuadores2: [
        {
            nombre_real: "Andres Arenas",
            nombre: "Aregui",
            id: 1,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Cartoon",
            foto_de_perfil: "https://i.pinimg.com/originals/ce/cc/ae/ceccaeac3081121af892bae6c2aa7d7d.jpg  ",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        },
        {
            nombre_real: "Tatuador 2",
            nombre: "Tatuador 2",
            id: 1,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Acuarela",
            foto_de_perfil: "https://www.esdip.com/wp-content/uploads/2019/09/Cu%C3%A1nto-gana-un-tatuador.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }, {
            nombre_real: "Tatuador 3",
            nombre: "Tatuador 3",
            id: 1,
            pais: "Colombia",
            ciudad: "Bogota",
            estilos: "Realismo",
            foto_de_perfil: "https://logiabarcelona.com/wp-content/uploads/2015/11/bangbang2f-1-web.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }, {
            nombre_real: "Tatuador 4",
            nombre: "Tatuador 4",
            id: 1,
            pais: "Mexico",
            ciudad: "Leon",
            estilos: "Blackwork",
            foto_de_perfil: "https://cdn.elnacional.com/wp-content/uploads/2018/01/alex-bruz-cotiza-como-mejor-tatuador-venezuela_220109.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }, {
            nombre_real: "Tatuador 5",
            nombre: "Tatuador 5",
            id: 1,
            pais: "Colombia",
            ciudad: "Cali",
            estilos: "Neotradicional",
            foto_de_perfil: "https://www.radiorafaela.com.ar/wp-content/uploads/2021/09/I4PZI3PSQBEX7JBAKXFS35BJZE.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }, {
            nombre_real: "Tatuador 6",
            nombre: "Tatuador 6",
            id: 1,
            pais: "Colombia",
            ciudad: "Bogota",
            estilos: "Acuarela",
            foto_de_perfil: "https://tattop.com/files/2017/08/tatu-300x300.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }, {
            nombre_real: "Tatuador 7",
            nombre: "Tatuador 7",
            id: 1,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Acuarela",
            foto_de_perfil: "https://cdn.forbes.co/2022/01/NFT-4.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
            rate: 5,
            visitas: 0
        }, {
            nombre_real: "Tatuador 8",
            nombre: "Tatuador 8",
            id: 1,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Gótico",
            foto_de_perfil: "https://www.bacanika.com/images/TATUADORES_J%C3%93VENES/Curzi.jpg",
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://i.pinimg.com/736x/a1/12/a8/a112a8c185df29935bf4dc6893812281.jpg"],
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
