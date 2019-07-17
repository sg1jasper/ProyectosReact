import React, { Component } from 'react';

class Result extends Component {


    render() { 
        console.log(this.props.data);
        const { main , weather } = this.props.data;
        

        if (main){

            
            const ICON_URL = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
            const kelvin = 273.15;

         const {
                humidity, pressure, temp, temp_max, temp_min} = main;



            return ( 
                <div className="card">
                    < div className = "card-panel " >
                        <span className="card-title card-content valign center "> ESTADO DEL TIEMPO PARA {this.props.city} </span>
                        <p> Temperatura : {(temp-kelvin).toFixed(2)} &deg;celsius </p>
                        <p>  MAXIMA : {(temp_max-kelvin).toFixed(2)} &deg;celsius </p>
                        <p>  MINIMA : {(temp_min-kelvin).toFixed(2)} &deg;celsius </p>

                        <p> Humedad : {humidity} % </p>
                        <p> Presión atmosférica :  {pressure} Bares </p>

                        <p> Actualmente :  </p>
                        <img src={ICON_URL}></img>
                    </div>
                </div>
               
             );

        }else {
            return(
                <div> <p></p> </div>
            )
        
        
            }
  
    }
}

export default Result;