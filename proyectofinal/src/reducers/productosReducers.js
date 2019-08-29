import {MOSTRAR_PRODUCTOS ,MOSTRAR_PRODUCTO , ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO} from '../actions/types'; 

// Cada reducer tiene su propio StATE 
const initialState = {
    producots: []
}

export default function ( state = initialState ,  action ){
    // eslint-disable-next-line default-case
    switch (action.type){
        case MOSTRAR_PRODUCTOS:
            return  {
                ...state , 
                productos : action.payload 
                // crea copia del state con el payload pasado 
            }
        case MOSTRAR_PRODUCTO : 
            return{
                ...state , 
                producto : action.payload
            }
        case ELIMINAR_PRODUCTO: 
        return {
            ...state,
            productos : state.productos.filter(producto => producto.id !== action.payload )
        }
        case AGREGAR_PRODUCTO:
            return  {
                ...state , 
                 productos : [...state.productos , action.payload ]
            }

        default : 
            return state;  
    }
}