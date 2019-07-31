import React, { Component } from 'react';

class SinglePost extends Component {

    mostrarPost = (props) =>{
        if (!props.postFiltrado){
            return null
        }else{

         const postSeleccionado = this.props.postFiltrado;
         const { title, body ,userId } = postSeleccionado;

         return (
             <React.Fragment>

                <div className="card margin-left-5">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-content">
                        <p>ID del autor: {userId} </p>
                        <p> {body} </p>
                    </div>    
                </div>

             </React.Fragment>
         )
        }
        
    }

    render() { 
      

        

        return ( 
            <div className="col-12 col-md-8">
                  {this.mostrarPost(this.props)}
            </div>
         );
    }
}
 
export default SinglePost;