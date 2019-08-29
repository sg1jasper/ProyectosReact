import React, { Component } from 'react'

import {connect} from 'react-redux'; 
import {mostrarProducto} from '../actions/productosActions'; 


class EditarProducto extends Component {
    state ={
        nombre : "",
        precio : ""
    }

componentDidMount(){
   const {id}  = this.props.match.params
   this.props.mostrarProducto(id);
}

 UNSAFE_componentWillReceiveProps (nextProps , nextState) {
     const {nombre , precio } = nextProps.producto;

    this.setState({
        nombre: nombre,
        precio :  precio
    })
}


    render() { 
        return (
             <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Editar Producto</h2>
                            <form >
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input type="text" defaultValue={this.state.nombre} className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input type="text" defaultValue={this.state.precio}  className="form-control" placeholder="Precio" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Editar</button>
                            </form>
        
                        </div>
                    </div>
                </div>
            </div>
            
            
             );
    }
}
const mapStateToProps = (state) => ({
    producto : state.productos.producto
})

 
export default connect(mapStateToProps, {mostrarProducto})(EditarProducto);