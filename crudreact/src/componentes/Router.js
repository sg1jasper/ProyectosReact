import React, { Component } from 'react';

import {BrowserRouter , Route , Switch} from 'react-router-dom'; 
import axios from 'axios';



import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import SinglePost from './SinglePost';
import Formulario from './Formulario';


class Router extends Component {

    
    state = { 
        posts : []
     }

    componentDidMount(){
        this.obtenerPosts();
    }; 

    obtenerPosts = ()=>{
    const URI = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(URI)
        .then((response)=>{
            this.setState({
                posts : response.data
            })
        })
    };

    borrarPost = (id) => {
        const URI = 'https://jsonplaceholder.typicode.com/posts';
        axios.delete(`${URI}/${id}`)
        .then((res)=>{
            if(res.status === 200){
                const copiaState = [...this.state.posts];

            let stateFiltrado  =  copiaState.filter( posts =>(
                        posts.id !== id
            ))
            this.setState({
                posts : stateFiltrado
            })
            }
        })
    };

    crearPost = (datos)=>{
        axios.post(`https://jsonplaceholder.typicode.com/posts` , {datos})
        .then(res =>{

            if (res.status === 201){
                let postId = {id: res.data.id}; 
                
                let nuevoPost = Object.assign({}, res.data.datos , postId);
                console.log(nuevoPost);
                
                this.setState( prevState => ({
                    posts : [...prevState.posts , nuevoPost]
                }))


            }else {
                console.error("fallo al enviar post nuevo");
            }
            
        })
    };

    render() { 
        return ( 
            <BrowserRouter>

                <div className="container">
                    <div className="row justify-content-center">
                        <Header/>
                        
                    </div>
                    <Navegacion/>
                </div>
                        
                    <Switch>  
                        <Route exact path="/" render={ 
                                ()=>{
                                    return (
                                        <Posts
                                            posts = {this.state.posts}
                                            borrarPost = {this.borrarPost}
                                        />
                                    )
                                }
                            }
                            
                        />
                        <Route exact path="/post/:postId" render={(props) =>{

                            let numPost = props.location.pathname.replace("/post/" , "");
                            const posts = this.state.posts;

                            let postFiltrado;
                            postFiltrado = posts.filter( p => (
                                    p.id === Number(numPost)
                            ))

                            return(
                                
                                <SinglePost
                                    postFiltrado = {postFiltrado[0]}
                                />

                            )}
                        }/>

                        <Route exact path="/crear" render={() =>{
                                return (
                                    <Formulario
                                        enviarDatosFormulario={this.crearPost}
                                    />
                                  )
                           }
                        }/>

                    

                    </Switch>
            </BrowserRouter> 
        );
    }
}
 
export default Router;