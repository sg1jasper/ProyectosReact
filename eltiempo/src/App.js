import React , {Component} from 'react';

import Header from './components/Header'
import Form from './components/Form'
import Result from './components/Result'



class App extends Component {
  state = {
       result : {},
       city : ''
  };
  


  getValuesFromApi = (valuesForSendToApi) =>{
    const { city ,state } = valuesForSendToApi;
    const APIKEY = '312eade65e9028f5428a2ecbc8a983eb';
    const URI = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${APIKEY}`;
    console.log(URI)
    //Send data to Request 
    fetch(URI)
      .then((response)=>{
        return  response.json();
      })  
      .then((dataWeather)=>{
        this.setState({
          result : dataWeather, 
          city : city
        })
      })

  };



  render(){

  return (
    <div className="container">
      <div className="row">
          <div className="col s12 m6">
            <Header 
              titleHeader = 'El Tiempo'
            />
          </div>
      </div>
    <div className="row">
      <div className="col s12 m5">
          <div className = "card-panel hoverable teal lighten-5" >
              <div className = "card-content white-text" >
                <div className="row">
                  <Form
                    getValuesForApi ={ this.getValuesFromApi }
                    
                  />
                </div>
              </div>
          </div>
      </div>

           <div className="col s12 m7">
        <Result
          data = {this.state.result}
          city = {this.state.city}
        />
      </div>
    </div>

 
 
 


    </div>
  );
  }
}

export default App;
