import React from 'react'
import { Panel, Button } from 'react-bootstrap'
import ItemHeader from './ItemHeader'
import FeatureList from './FeatureList'

const ItemPanel = ({ name, price, features, sku }) => (
  <Panel className="text-center">
    <ItemHeader name={name} price={price}/>
    <FeatureList features={features}/>
    <Button bsStyle="success" bsSize="small" href={'/checkout/' + sku}>Buy</Button>
  </Panel>
)

export default ItemPanel