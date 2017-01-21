import React, { Component } from 'react'
import logo from '../logo.svg'
import data from '../api/products.json'
import ItemsRow from './ItemsRow'
import NavigationBar from './NavigationBar'

console.log(data.products[0].features)

const App = () => (
  <div>
    <NavigationBar/>
    <div className="container">
      <ItemsRow items={data.products}/>
    </div>
  </div>
)

export default App