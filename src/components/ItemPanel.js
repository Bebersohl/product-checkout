import React from 'react'
import { Panel } from 'react-bootstrap'
import ItemHeader from './ItemHeader'
import FeatureList from './FeatureList'
import { Link } from 'react-router'

const ItemPanel = ({ name, price, features, sku }) => (
  <Panel className="text-center">
    <ItemHeader name={name} price={price}/>
    <FeatureList features={features}/>
    <Link className="btn btn-success" to={`/checkout/${sku}`}>Buy</Link>
  </Panel>
)

export default ItemPanel