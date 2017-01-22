import React from 'react'
import { Panel, Button } from 'react-bootstrap'
import ItemHeader from './ItemHeader'

const PriceCalculator = ({ name, price }) => (
  <Panel className="text-center">
    <ItemHeader name={name} price={price}/>
  </Panel>
)

export default PriceCalculator