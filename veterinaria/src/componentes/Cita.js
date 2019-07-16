import React, { Component } from 'react';

class Cita extends Component {
    
    borrarCita= (e)=>{
       
        
        this.props.borrarCita(this.props.info.id);
    }
    
    render() { 
        const {fecha , hora , nombreDueno , nombreMascota , sintomas } = this.props.info;
      
        return ( 
            <div  className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0"> Nombre mascota : {nombreMascota} </h3>
                    <p className="card-text"><span>Nombre dueño : </span>{nombreDueno}</p>
                    <p className="card-text"><span>fecha :  </span>{fecha}</p>
                    <p className="card-text"><span>hora :  </span>{hora}</p>
                    <p className="card-text"><span>Sintomas : </span></p>
                    <p className="card-text"> {sintomas}</p>

                    <button onClick={this.borrarCita}  className="btn btn-danger">BORRAR &times;</button>

                </div>
            </div>
            
         );
    }
}
 
export default Cita;