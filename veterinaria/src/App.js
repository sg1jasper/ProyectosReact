import React from 'react';
import Header from './componentes/Header'
import AgregarCita from './componentes/AgregarCita'


function App() {
  return (
    <div className="container">
      <Header
        titulo = {'Administrador de pacientes,  Veterinario'}
      />
      <div className="row">
        <div className="col-md-6">
          <AgregarCita/>
        </div>
      </div>
    </div>
  );
}

export default App;
