import React, { Component } from 'react';
import Buscador from './componentes/Buscador';

class App extends Component {
  state = { 
    termino : "" ,
	resultado : []
   }

   consultaApi = () =>{
	   const termino = this.state.termino;
     const URI = `https://pixabay.com/api/?key=13199340-5394102a1b7ccb87efbb9b9a7&q=${termino}&image_type=photo`;

	 fetch(URI)
	 	.then((res)=>{
			 return res.json();
		 })
		 .then((data)=>{
			 this.setState({
				 resultado : data.hits
			 })
		 })
   }

  datosBusqueda = (termino) =>{
		this.setState({
			termino : termino
		},()=>{  // Callback que se ejecuta al terminar de insertar en el State 
				this.consultaApi();
			}
		)
	}
  

  render() { 

    return ( 

      <div className="app container">
          <div className="jumbotron">
              <p className="lead text-center"> Buscador de imagenes </p>
              <Buscador
                busqueda={this.datosBusqueda}
              />
          </div>
      </div>
     );

  };
}
 

export default App;
