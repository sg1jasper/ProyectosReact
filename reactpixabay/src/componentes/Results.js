import React, {Component} from 'react'

import Result from './Result';
import './results.css';
import PaginationButtons from './PaginationButtons';

class Results extends Component {
 
    renderCards = ()=>{
        const dataProps = this.props.resultadoBusqueda;
        
        if (dataProps.length === 0 ) return null;

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
                <PaginationButtons
                  paginaMas = {this.props.paginaMas}
                  paginaMenos = {this.props.paginaMenos}
                  pagActual={this.props.pagActual}
                  totalPages={this.props.totalPages}

                />

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