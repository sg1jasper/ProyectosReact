import React, { Component } from 'react';

import {BrowserRouter , Route , Switch} from 'react-router-dom'; 
import axios from 'axios';

import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import SinglePost from './SinglePost';

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
                                    p.id == numPost
                            ))

                            return(
                                
                                <SinglePost
                                    postFiltrado = {postFiltrado[0]}
                                />

                            )}
                        }/>

                    </Switch>
            </BrowserRouter> 
        );
    }
}
 
export default Router;