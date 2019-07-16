import React, { Component } from 'react';

import Cita from './Cita';

class ListaCitas extends Component {
    

    render() { 
        const citas = this.props.citas;

        //Validacion si hay citas 
        const mensaje = Object.keys(citas).length ? 'Listado de citas ' : 'No hay citas programadas';
        



        return ( 
            <div className="card mt-5">
                <div className="card-body">
                    <div className="listaCitas">
                        <h2 className="card-title text-center"> {mensaje}</h2>

                            <div className="lista-citas">
                                {Object.keys(this.props.citas).map((cita)=>(
                                    <Cita
                                        key= {cita} 
                                        info={this.props.citas[cita]}
                                        borrarCita={this.props.borrarCita}
                                        
                                    />

                                ))}
                            </div>
                        
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ListaCitas;