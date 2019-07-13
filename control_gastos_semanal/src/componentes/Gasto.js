import React, { Component } from 'react'
class Gasto extends Component {
    
    render() { 
        const {cantidad , nombreGasto} = this.props.gasto;
        return ( 

            <li className="gastos">
                <p>
                    {nombreGasto}
                    <span className="gasto">  {cantidad} €</span>
                </p>

            </li>

         );
    }
}
 
export default Gasto;