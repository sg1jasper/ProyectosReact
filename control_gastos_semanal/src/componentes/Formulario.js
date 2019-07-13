import React, { Component } from 'react';

class Formulario extends Component {

    // REFS PARA CREAR LOS DATOS DEL FORMULARIO 
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();

    CrearGasto = (e) =>{
        e.preventDefault();

        // Crear el objeto con los datos 
      const  gasto = {
                nombreGasto: this.nombreGastoRef.current.value,
                cantidad: this.cantidadGastoRef.current.value
            };

        // Añadirlo y enviar por medio de props al padre APP

        

        // Resetear formulario 
            e.currentTarget.reset();

    }


    render() { 
        return (
            <form onSubmit={this.CrearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" type="text" placeholder="Ej. Transporte" ref={this.nombreGastoRef}/>
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input className="u-full-width" type="text" placeholder="Ej. 300" ref={this.cantidadGastoRef} />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>

          );
    }
}
 
export default Formulario;