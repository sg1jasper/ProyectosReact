import React, {Component} from 'react';
import Header from './components/Header'
import Noticias from './components/Noticias';
import Formulario from './components/Formulario'

class App extends Component {
  state = { 
    noticias : []
   }


componentDidMount() {
    this.consultarNoticias();

}

consultarNoticias = (categoria = 'general') =>{
    let  uri = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=2b4cf860632e43d4884f16d75f290c15`;

      
      fetch(uri)
          .then((res) => {
              return res.json()
          })
          .then((noticiasTek) => {
              this.setState({
                  noticias: noticiasTek.articles
              })
          })

          console.log(uri);

}


  render() { 


    return ( 
        <div className="contenedor-app">
            <Header
            title = 'App-Noticias'
            />

            <div className="container white contenedor-noticias">
               

                <Formulario
                    consultarNoticias = {this.consultarNoticias}
                />

                <Noticias
                noticias = {this.state.noticias}
                />
            </div>


        </div>
     );
  }
}
 
export default App;

