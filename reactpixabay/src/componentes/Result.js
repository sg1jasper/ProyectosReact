import React from 'react'
import './Result.css';


const Result = (props) => {

    const {comments,favorites,imageHeight,imageWidth,user,previewURL,webformatURL,largeImageURL } = props.dataCard;
    return ( 
        <div className="card" >
            <img src={webformatURL} className="card-img-top" alt="..." className="img-card"/>
            <div className="card-body">
                <h5 className="card-title">Comentarios : {comments}  </h5>
                <h5 className="card-title">Favoritos : {favorites} </h5>
                <h5 className="card-title">Resolucion : {imageWidth} X {imageHeight} </h5>
                <p className="card-text">Imagen cedida por el usuario : {user} .</p>

                <a href={largeImageURL} className="btn btn-primary" target="_blank">ALTA RESOLUCION</a>
                <a href={webformatURL} className="btn btn-success" target="_blank">PARA WEB</a>

            </div>
        </div>
     );
}
 
export default Result;