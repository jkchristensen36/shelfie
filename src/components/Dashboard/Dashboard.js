import React, { Component } from 'react';
import Product from '../../components/Product/Product'


const Dashboard = (props) => {
   const inventoryMap = props.inventory.map( item => {
      return <Product key={item.id} item={item} />
   })
   return <div className="dash-cont">
         {inventoryMap}
      </div>
         
}

export default Dashboard;