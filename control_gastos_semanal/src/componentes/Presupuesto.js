import React, { Component } from 'react';
class Presupuesto extends Component {
    
    render() { 
        return ( 
            <div className="alert alert-primary">
                PRESUPUESTO : {this.props.presupuesto} €
            </div>
         );
    }
}
 
export default Presupuesto;