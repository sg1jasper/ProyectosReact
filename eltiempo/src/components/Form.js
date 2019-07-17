import React, { Component } from 'react';
class Form extends Component {
    state = {  }

    //REFS
    cityRef = React.createRef();
    stateRef = React.createRef();

    sendRequest = (e) => {
         e.preventDefault();
         console.log('Button pressed');
         const city = this.cityRef.current.value;
         const state = this.stateRef.current.value;

         const valuesForSend = {
             city ,
             state
         } 

         this.props.getValuesForApi(valuesForSend);

     };

    render() { 



        return ( 
            
             <form>
                <div className="input-field col s12 m8 l4 offset-m2  ">
                    <input id="city" type="text"  placeholder="Ciudad" ref={this.cityRef}/>  
                </div>
                <div className = "input-field col s12 m8 l4 offset-m2 " >
                    <select  ref={this.stateRef}>
                        <option value="ES" defaultValue>España</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                <div className="input-field col s12 m8 l4 offset-2">
                  <button onClick={this.sendRequest} className="btn-floating btn-large waves-effect waves-light light-green accent-4"><i  className="material-icons">brightness_7</i></button>
                </div>
            </form>      
      
         );
    }
}
 
export default Form;