import React, { Component } from 'react';

import Buscador from './componentes/Buscador';
import Results from './componentes/Results';

import './buscador.css'

class App extends Component {
  state = { 
    termino : "" ,
   	resultado : [] ,
    pagina : "1",
    totalHits : "",
    totalPages : "",
    hitsXpage : 9
   }

   consultaApi = () =>{
 
	   const termino = this.state.termino;
     const URI = `https://pixabay.com/api/?key=13199340-5394102a1b7ccb87efbb9b9a7&q=${termino}&image_type=photo&per_page=${this.state.hitsXpage}&page=${this.state.pagina}`;

	 fetch(URI)
	 	.then((res)=>{
			 return res.json();
		 })
		 .then((data)=>{
       console.log(data.totalHits);
       const hitsXpage = this.state.hitsXpage;
       const totalPages = Math.ceil( (data.totalHits /hitsXpage) );
      
      console.log(totalPages);
			
       this.setState({
				 resultado : data.hits,
         totalHits: data.totalHits,
         totalPages : totalPages
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
  
  paginaMas = () =>{
    
    const totalPages = this.state.totalPages;
    let pagActual = this.state.pagina;
    
    if(totalPages === pagActual) return null ; 
      pagActual ++;
      console.log(pagActual);
      this.setState({
        pagina : pagActual
      }, ()=>{
        this.consultaApi();
        this.scroll();
      })
  };


  paginaMenos = () =>{
    let pagActual = this.state.pagina;
    if (pagActual === 1 ) return null;
    pagActual --;
    console.log(pagActual);
    this.setState({
      pagina : pagActual
    }, ()=>{
      this.consultaApi();
      this.scroll();
    })
  };

  scroll=()=>{
   const elementJumbo = document.querySelector('.jumbotron');
   elementJumbo.scrollIntoView('smooth' , 'start');
  }

  render() { 

    return ( 

      <div className="app container">
          <div className="jumbotron box-buscador ">
              <p className="lead text-center"> Buscador de imagenes </p>
              <Buscador
                busqueda={this.datosBusqueda}
              />
          </div>
          <div className="row">
            <div className="col-md-12">
              <Results
                resultadoBusqueda = {this.state.resultado}
                paginaMas = {this.paginaMas}
                paginaMenos = {this.paginaMenos}
                pagActual={this.state.pagina}
                totalPages={this.state.totalPages}
              />
            </div>
          </div>
      </div>
     );

  };
}
 

export default App;
