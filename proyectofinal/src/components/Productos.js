import React, { Component } from 'react'

import Producto from './Producto';

// IMPORTANDO REDUX 
import {connect} from 'react-redux'; // connect se usa para conectar la accion al componente 
import {mostrarProductos} from '../actions/productosActions' ;   // Importar la accion para usarla 


class Productos extends Component {
    
    // Antes de cargar el componente , llamamos la accion de redux que a su vez dispara ProductosActions
    // ProductosActions pide a productosReducer que realice la accion del Type solicitada 
    // El reducer modifica el State dependiendo del Switch 
    // El Componente lee el state 

    componentDidMount(){
      this.props.mostrarProductos();
    }
    

    render() { 
        // DESTRUCTURING A PRODUCTOS 
            const {productos} = this.props ; 

        if (productos){ // esparamos a que se cargue productos 
            return (
                <React.Fragment>
                    <h2 className="text-center my-5"> LISTADO DE PRODUCTOS</h2>
                    <div className="row justify-content-center"> 
                        <div className="col-md-8">
                            <ul> 
                                {
                                    productos.map( producto => (
                                        <Producto 
                                            //Pasando  pro props a cada producto la info 
                                             key={producto.id}
                                             info={producto}
                                        />
                                    ))}
                            
                            </ul>
                        </div>
                    </div>

                </React.Fragment>
            )
        }else{ return null }

    }

}

//state de este contenedor 
const mapStateToProps = state =>({
    productos: state.productos.productos
})
 

export default connect(mapStateToProps, {mostrarProductos})(Productos); 
