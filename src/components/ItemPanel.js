import React from 'react'
import { Panel } from 'react-bootstrap'
import ItemHeader from './ItemHeader'
import FeatureList from './FeatureList'

const ItemPanel = ({ name, price, features }) => (
  <Panel className="text-center">
    <ItemHeader name={name} price={price}/>
    <FeatureList features={features}/>
  </Panel>
)

export default ItemPanel