import React, {Component} from 'react'

import Swal from 'sweetalert2';

import {Link} from 'react-router-dom';


class Post extends Component {
    confirmarBorrado = () =>{
        const {id } = this.props.info;

        Swal.fire({
            title: 'Estas Seguro ?',
            text: "No podrás recuperar el post borrado",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#F80000' ,
            cancelButtonText: 'Cancelar'
        })
        .then((result) => {
            if (result.value) {

                this.props.borrarPost(id)

                Swal.fire(
                    'BORRADO!',
                    'Su post ha sido borrado de la base de datos.',
                    'success'
                )
            }
        })   
    };

    render() { 
        const {id , title} = this.props.info;
    
    return ( 
        <tr> 
            <td> {id}</td>
            <td> {title}</td>
            <td>
                <Link to={`/post/${id}`} className="btn btn-primary"> VER </Link>
                <button onClick={this.confirmarBorrado } className="btn btn-danger" type="button">BORRAR</button>
            </td>
        </tr>
     );
}

}
export default Post;

