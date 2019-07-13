import React , {Component} from 'react';
import '../css/App.css';
import Header from './Header'
import Formulario from './Formulario';

class App extends Component {
  state = {
    presupuesto : '',
    restante : '',
    gastos: {}
  }

  // AGREGAR un nuevo gasto al State 
  agregarGasto = gasto => {
    // Crear copia del state actual 
    const gastos = {...this.state.gastos}; // copia lista de gastos en constante gastos

    // Agregar el nuevo gasto al objeto copia del state 
    gastos[`gasto${Date.now()}`] = gasto;

    // añadirlo al state el nuevo 
    this.setState ({
      gastos : gastos
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

                  <div className="one-half column">
                    
                  </div>

                </div>
              </div>

          </div>
        
      )

  }
}

export default App;
