import React, { Component } from 'react';

class Form extends Component {
   constructor() {
      super();
      this.state = {
         formEntry: {
            url: "",
            name: "",
            price: ""
         }
      }
   }

  render() {
      return(
            <div className="form-cont">
               <input 
                  className="in-field"
                  name="url"
                  value={this.state.url}
                  type="text"
                  onChange=""
                  />
               <input className="in-field"
                  name="name"
                  value={this.state.name}
                  type="text"
                  placeholder=""
                  onChange=""
                  />
               <input className="in-field"
                  name="price"
                  value={this.state.price}
                  type="text"
                  placeholder="0"
                  onChange=""
                  />
            </div>
      )
   }      
}   

export default Form;