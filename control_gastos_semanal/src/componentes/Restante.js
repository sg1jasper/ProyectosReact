import React, { Component } from 'react';
class Restante extends Component {

           cambiaEstado = ()=> {
        if(this.props.restante > ( (this.props.presupuesto) /2 )){
        return ( 
            <div className="alert alert-success">
                RESTANTE : {this.props.restante} €
            </div>
         )
        } else if (this.props.restante <= ((this.props.presupuesto) / 2) && this.props.restante >= ((this.props.presupuesto) / 3)) {
          return ( 
            <div className="alert alert-warning">
                RESTANTE : {this.props.restante} €
            </div>
         )
        }else{
          return ( 
            <div className="alert alert-danger">
                RESTANTE : {this.props.restante} €
            </div>
         )

        }
    };
    
    render() {

return (this.cambiaEstado())
          
        
    }

    
}
 
export default Restante;