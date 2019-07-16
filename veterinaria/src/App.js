import React, { Component } from 'react'

import Header from './componentes/Header'
import AgregarCita from './componentes/AgregarCita'
import ListaCitas from './componentes/ListaCitas'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      citas: [] 
    }
  }

  //Antes de cargar los componentes , cargamos el state con el local storage actual
  componentWillMount(){
    const citasLstorage = JSON.parse(localStorage.getItem('citas'))
   
   
    if (citasLstorage){
      this.setState({
        citas: citasLstorage
      })
    }

  
  }

  //Cuando el componete cambie , se le añade al local Storage el stage 
  componentDidUpdate(){
    localStorage.setItem(
      'citas', JSON.stringify(this.state.citas)
    );
  }

  crearCita = (nuevaCita)=>{
    const  citas = [...this.state.citas , nuevaCita];

    this.setState({
      citas : citas 
    });
  }

  borrarCita = (id) =>{

    //Obtener copia del State 
    const citasActuales = [...this.state.citas]; 

    //borrar el elemento 
    const citas = citasActuales.filter((cita)=> cita.id !== id ) ; 

    //actualizar state 
    this.setState({
      citas
    });

  }

  render() { 
    return ( 
        <div className="container">
          <Header
            titulo = {'Administrador de pacientes,  Veterinario'}
          />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita
                crearCita = {this.crearCita}
              />
            </div>

            <div className="col-md-6">
                <ListaCitas
                  citas = {this.state.citas}
                  borrarCita={this.borrarCita}
                />
            </div>
          </div>
        </div>
     );
  }
}
 
export default App;

