import React from 'react';
import './Navegacion.css';
import {Link} from 'react-router-dom';

const Navegacion = () => {
    return (

            <nav className="col-md-8 col-12">
            <Link to='/'>Todos los POSTS</Link>
            <Link to='/crear'>NUEVO POST</Link>
        </nav>
      );
}
 
export default Navegacion;