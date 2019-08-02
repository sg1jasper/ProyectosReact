import React from 'react'

import './PaginationButtons.css'


const PaginationButtons = (props) => {
    return ( 
        
        
        <div className="buttons">
            <button onClick={props.paginaMenos} className="btn btn-dark" > Anterior </button>
            <span className="badge badge-pill badge-light ">{props.pagActual}</span>
            <button onClick={props.paginaMas} className="btn btn-dark" > Siguiente </button>
        </div>
      
     );
}
 
export default PaginationButtons;