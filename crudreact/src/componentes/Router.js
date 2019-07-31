import React, { Component } from 'react';

import {BrowserRouter , Route , Switch} from 'react-router-dom'; 
import axios from 'axios';

import Header from './Header';

class Router extends Component {
    
    state = {  }


    render() { 
        return ( 
            <BrowserRouter>
            
                <div className="container">
                    <div className="row justify-content-center">
                        <Header/>
                    </div>
                </div>
                        
                    <Switch>
                        <Route>

                        </Route>
                    </Switch>
            </BrowserRouter> 
        );
    }
}
 
export default Router;