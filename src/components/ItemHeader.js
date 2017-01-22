import React from 'react'
import Price from './Price'
import '../css/item-header.css'

const ItemHeader = ({ name, price }) => (
  <div className="item-header">
    <h4><strong>{name}</strong></h4>
    <Price price={price}/>
  </div>
)

export default ItemHeader