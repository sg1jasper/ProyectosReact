import React from 'react';
import '../css/App.css';
import Header from './Header'
import Formulario from './Formulario';

function App() {
  return (
      <div className="App container">
        <Header
            titulo='GASTO SEMANAL'
        />

          <div className="contenido-principal contenido">
            <div className="row">

              <div className="one-half column">
                  <Formulario/>
              </div>

              <div className="one-half column">
                
              </div>

            </div>
          </div>

      </div>
    
  );
}

export default App;
