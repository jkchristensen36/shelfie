import React from 'react';

const Product = (props) => {
   return(
      <div>
         <img src={`${props.item.img}`}/>
         <h2>{props.item.name}</h2>
         <h2>${props.item.price}</h2>
      </div>
   )
}

export default Product;