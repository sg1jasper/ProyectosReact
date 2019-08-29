import React, { Component } from 'react'

import {Link} from 'react-router-dom';

class Header extends Component {
 
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg narvar-dark bg-primary justify-content-between d-flex">
                <h1>
                    <Link to={'/'} className="text-light ">
                        CRUD REACT REDUX Y AXIOS
                    </Link>
                </h1>
               
                <Link to ={'/productos/nuevo'} className="btn btn-danger nuevo-post"> AGREGAR PRODUCTO &#43; </Link>
            </nav>
         );
    }
}
 
export default Header;