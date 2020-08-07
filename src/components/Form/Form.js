import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
   constructor() {
      super();
      this.state = {
         formEntry: {
            img: "",
            name: "",
            price: ""
         }
      }
   }

   addProduct = (e, product) => {
      e.preventDefault()
      console.log(product)
      axios.post('/api/product', {product})
         .then( res => {
            console.log(res.data)
            this.setState({
               formEntry: res.data
            })
         })
   }

   universalHandler = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      });
   };

   cancelEntry = () => {
      document.getElementById("createProductForm").reset();
   }

  render() {
      return(
            <form id="createProductForm" className="form-cont">
               <input 
                  className="in-field"
                  name="img"
                  value={this.state.img}
                  type="text"
                  onChange={(event) => this.universalHandler(event)}
                  />
               <input className="in-field"
                  name="name"
                  value={this.state.name}
                  type="text"
                  placeholder=""
                  onChange={(event) => this.universalHandler(event)}
                  />
               <input className="in-field"
                  name="price"
                  value={this.state.price}
                  type="text"
                  placeholder="0"
                  onChange={(event) => this.universalHandler(event)}
                  />
               <button
                  onClick={this.cancelEntry}
                  >
               Cancel
               </button>   
               <button
                  onClick={ e => {
                     console.log(e)
                     // e.preventDefault()
                     // this.addProduct(e, this.state)
                     // this.setState({
                     //    img: "",
                     //    name: "",
                     //    price: ""
                     // })
                  }}  
                  >
               Add to Inventory</button>   
            </form>
      )
   }      
}   

export default Form;