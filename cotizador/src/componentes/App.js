import React , {Component} from 'react';
import Header from './Header';
import Formulario from './Formulario.js';
import {obtenerDiferenciaAnio , calcularMarca, obtenerPlan} from '../helper';


class App extends Component{

  cotizarSeguro = (datosCotizacion) =>{
    const {marca , plan , year} = datosCotizacion;

    // Agregando precio base del seguro 2000
    let resultado = 2000; 
    // cada año se reduce el precio un 3%  , obtener diferencia de años y calcular 
    const difAnios = obtenerDiferenciaAnio(year);
    
    resultado -= ((difAnios * 3 ) * resultado) / 100; 
    

    // el vehiculo americano se incrementa 15% el asiatico 5% y el europeo un 30% 
    resultado = calcularMarca(marca) * resultado;

    // plan del coche basico incrementa 20% y el completo 50% 
    let incrementoPlan = obtenerPlan(plan);
    
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    console.log(resultado);
    }

  render(){

    return(
      <div className="contenedor">
        <Header titulo = "Cotizador de Seguro"/>
        <div className="contenedor-formulario">
          <Formulario 
            cotizarSeguro = {this.cotizarSeguro}
          />
        </div>
        
      </div>

    );
  }
}

export default App;
 