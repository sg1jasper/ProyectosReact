import React , {Component} from 'react';
import '../css/App.css';
import Header from './Header'
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto , revisarPresupuesto } from '../Helper';

class App extends Component {
  state = {
    presupuesto : '',
    restante : '',
    gastos: {}
  }

  componentDidMount(){ // se ejecuta antes de pintar la pantalla
    this.obtenerPresupuesto();
  }100
100
  obtenerPresupuesto(){
    let presupuesto = prompt('Establece el presupuesto inicial');
    let resultado = validarPresupuesto(presupuesto);
    if (resultado){
      this.setState({
        presupuesto : presupuesto,
        restante : presupuesto
      })
    }else {
      this.obtenerPresupuesto();
    }

  }

  // AGREGAR un nuevo gasto al State 
  agregarGasto = gasto => {
    // Crear copia del state actual 
    const gastos = {...this.state.gastos}; // copia lista de gastos en constante gastos

    // Agregar el nuevo gasto al objeto copia del state 
    gastos[`gasto${Date.now()}`] = gasto;

    //Restar presuùesto el gasto 
    this.restarPresupuesto(gasto.cantidad);

    // añadirlo al state el nuevo 
    this.setState ({
      gastos : gastos
    })
  }
  
  //Restar del presupuesto cuando se crea un nuevo gasto 
  restarPresupuesto  = cantidad =>{
    // Lectura de la cantidad del nuevo gasto 
    let restar = Number(cantidad);

    // Copia del restante que hay en el state actual
    let restante = this.state.restante;

    // Restamos los valores 
    restante -= restar; 

    // actualizamos el valor del nuevo state 
    this.setState({
      restante
    })

  }




  render(){

      return (
          <div className="App container">
            <Header
                titulo='GASTO SEMANAL'
            />

              <div className="contenido-principal contenido">
                <div className="row">

                  <div className="one-half column">
                      <Formulario
                        agregarGasto = {this.agregarGasto}
                      />
                  </div>
                    <Listado
                      gastos = {this.state.gastos}
                    />


                  <div className="one-half column">
                    <ControlPresupuesto
                      presupuesto = {this.state.presupuesto}
                      restante = {this.state.restante}
                    />
                    
                  </div>

                </div>
              </div>

          </div>
        
      )

  }
}

export default App;
