import React, { Component } from 'react';



class Buscador extends Component {
    refBusqueda = React.createRef();

    busqueda = (e)=>{
        e.preventDefault();

       const buscar = this.refBusqueda.current.value;

        this.props.busqueda(buscar);


    };

    render() { 
        return ( 
            <form  onSubmit={this.busqueda}>
                <div className="row ">
                    <div className=" form-group col-md-8">
                    <input className="form-control form-control-lg" type="text" placeholder="Busca tu imagen" ref={this.refBusqueda}/>

                    </div>
                    <div className="form-group col-md-4">
                    <input type="submit" className="btn btn-lg btn-danger btn-block" value="BUSCAR" />
                    </div>
                </div>
            </form>
         );
    }
}
 
export default Buscador;