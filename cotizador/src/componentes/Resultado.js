import React, { Component } from 'react';

class Resultado extends Component {

    render() { 
        return ( 
            <p>Resultado :  {this.props.resultado} $</p>
         );
    }
}
 
export default Resultado;