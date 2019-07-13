import React, { Component } from 'react';
import {TransitionGroup , CSSTransition} from 'react-transition-group';


class Resultado extends Component {

    render() { 
        const mensaje = (!this.props.resultado) ? 'Selecciona los valores para cotizar': 'TOTAL '


        return ( 
            <div className="gran-total">
                {mensaje}
                <TransitionGroup  component="span" className="resultado">
                    <CSSTransition
                        classNames="resultado" 
                        key= {this.props.resultado}
                        timeout={{enter: 500 , exit: 500}}>
                            <span>{this.props.resultado} </span>
                    </CSSTransition>
                </TransitionGroup>

            </div>

        
         );
    }
}
 
export default Resultado;