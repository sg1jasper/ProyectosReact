import React, {Component} from 'react'

import Result from './Result';
import './results.css';
import PaginationButtons from './PaginationButtons';

class Results extends Component {
 
    renderCards = ()=>{
        const dataProps = this.props.resultadoBusqueda;
        
        if (dataProps == "" ) return null;

        return(
            <React.Fragment>
                <div className="contenedor">
                    {dataProps.map((singleData)=>(
                        <Result
                            key = {singleData.id}
                            dataCard= {singleData}
                        />
                    ))}
    
                </div>
                <PaginationButtons/>

            </React.Fragment>
        )    
    };


    render() { 
        return ( 
            <React.Fragment>
                { this.renderCards() } 
            </React.Fragment>
         );
    }
}
 

 
export default Results;