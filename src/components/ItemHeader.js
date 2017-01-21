import React from 'react'
import Price from './Price'

const ItemHeader = ({ name, price }) => (
  <div>
    <h4>{name}</h4>
    <Price price={price}/>
  </div>
)

export default ItemHeader