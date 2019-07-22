import React from 'react'

function Noticia(props) {

    const {author , content , description , title , url , urlToImage , source } = props.noticia

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage}></img>
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="card-content">
                    <h3> {title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target ="_blank" className="waves-effects waves-light btn"> LEER </a>
                </div>

            </div>
           
             

        </div>
    )
}

export default Noticia
