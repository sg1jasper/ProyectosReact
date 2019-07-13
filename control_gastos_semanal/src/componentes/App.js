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
  agregarGasto = gasto =>{
    // Crear copia del state actual 

    // Agregar el nuevo gasto al objeto copia del state 

    // añadirlo al state el nuevo 


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
                        agregarGasto = {this.props.agregarGasto}
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
