import React, { Component } from 'react';

import Swal from 'sweetalert2';

class Formulario extends Component {
   
    tituloRef = React.createRef();
    contenidoRef = React.createRef();

    sweet = ()=>{
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Nuevo Post creado',
            showConfirmButton: false,
            timer: 1500
            })
    };

    crearPost = (e)=>{
        e.preventDefault();

        const datosForm = {
            title : this.tituloRef.current.value,
            body : this.contenidoRef.current.value , 
            userId : 1
        }
            this.sweet();
           this.props.enviarDatosFormulario(datosForm);
    }

    render() { 
        return ( 
            <form className="form col-8" onSubmit={this.crearPost}>
                <legend className="text-center">CREAR NUEVO POST </legend> 
                <div className="form-group">
                    <label>TITULO DEL POST</label> 
                    <input type="text" className="form-control" placeholder="Titulo del post" ref={this.tituloRef}></input>
                </div>
                <div className="form-group">
                    <label>CONTENIDO</label> 
                    <textarea type="textarea" className="form-control" placeholder="Contenido" ref={this.contenidoRef}></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-control">CREAR</button>
            </form>
         );
    }
}
 
export default Formulario;