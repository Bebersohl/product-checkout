import React from 'react'
import ItemPanel from './ItemPanel'
import { Row, Col } from 'react-bootstrap'

const ItemsRow = ({ items }) => (
  <Row className="row-eq-height">
    {items.map((item) =>
      <Col xs={12} md={4} key={item.sku}>
        <ItemPanel
          name={item.name} 
          price={item.price} 
          features={item.features}
          sku={item.sku}
        />
      </Col>
    )}
  </Row>
)

export default ItemsRow