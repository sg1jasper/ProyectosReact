import React, { Component } from 'react'

import {Link} from 'react-router-dom';

//REDUX 
import {connect} from 'react-redux'; 
import {borrarProducto} from '../actions/productosActions'

class Producto extends Component {
    
    eliminarProducto = ()=>{

        // aqui se le pide que se ejecute la accion 
        const id = this.props.info.id
        this.props.borrarProducto(id);
    }
  
    render() { 

        // destructuring de los props 
        const {id , nombre , precio } = this.props.info; 


        return ( 
            <li className="list-group-item">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-8 d-flex justify-content-between align-items-center flex-wrap">
                        <p className="text-dark m-0"> {nombre} </p>
                        <span className="badge badge-warning text-dark">{precio}</span>

                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                        <Link to={`productos/editar/${id}`} className="btn btn-primary mr-2"> EDITAR </Link>
                        <button onClick={this.eliminarProducto} type="button" className="btn btn-danger" > ELIMINAR </button>
                    </div> 
                </div>
            </li>
         );
    }
}


// No se usa mapStateToProps porque no se va a modificar el state  
export default connect(null, {borrarProducto})(Producto);