import React, { Component } from 'react'

import Header from './componentes/Header'
import AgregarCita from './componentes/AgregarCita'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      citas: [] 
    }
  }


  crearCita = (nuevaCita)=>{
    const  citas = [...this.state.citas , nuevaCita];

    this.setState({
      citas : citas 
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
          </div>
        </div>
     );
  }
}
 
export default App;

