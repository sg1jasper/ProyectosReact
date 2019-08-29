/* AQUI ES DONDE SE CREA LA LOGICA DE LAS ACCIONES , se le envian al 
reducer que tratará con el store según el tipo de accion solicitada  */

import {MOSTRAR_PRODUCTOS , MOSTRAR_PRODUCTO , ELIMINAR_PRODUCTO ,AGREGAR_PRODUCTO} from './types'; 

import axios from 'axios'; 

// Accion de mostrar todos los productos usando AXIOS 
export const mostrarProductos = () => async dispatch =>{
    const respuesta = await axios.get('http://localhost:5000/productos'); 

//DISPATCH LE ENVIARÄ ESTOS DATOS AL REDUCER QUE COINCIDA CON EL TIPO DE ACCION Y EJECUTARA EL SWITCH CORRESPONDIENTE 
    dispatch ({
        type: MOSTRAR_PRODUCTOS, 
        payload: respuesta.data
    })
}

//Action de mostrar un producto seleccionado por id 
export const mostrarProducto =(id) => async dispatch => {
    const response = await axios.get(`http://localhost:5000/productos/${id}`)

    dispatch({
        type: MOSTRAR_PRODUCTO ,
        payload: response.data
    })
}


//Accion de eliminacion de posts 
export const  borrarProducto = (id) => async dispatch =>{
    // Accion que se va a realizar  
    await axios.delete(`http://localhost:5000/productos/${id}`); 

    //CUANDO se solicite el tipo de ELIMINAR_PRODUCTO y paso el id para usar filter en la accion : 
    dispatch({
        type: ELIMINAR_PRODUCTO,
        payload : id 
    })

}


//Accion para crear nuevo producto 
export const agregarProducto = (nuevoProducto) => async dispatch => {
    // creo nuevo producto 
    const respuesta = await axios.post('http://localhost:5000/productos' , nuevoProducto);
   

    //Definicion de que action va a disparar 
    dispatch({
        type: AGREGAR_PRODUCTO ,
        payload : respuesta.data
    })
}