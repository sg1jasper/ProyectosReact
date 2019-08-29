import {combineReducers} from 'redux'; 
import productosReducer from './productosReducers';

export default combineReducers({
    productos : productosReducer // este coge el state del reducer y se lo pasa al action
}); 