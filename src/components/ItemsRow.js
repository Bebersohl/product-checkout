import React from 'react'
import ItemPanel from './ItemPanel'
import { Row, Col } from 'react-bootstrap'

const ItemsRow = ({ items }) => (
  <Row>
    {items.map((item) =>
      <Col xs={12} md={4}>
        <ItemPanel
          name={item.name} 
          price={item.price} 
          features={item.features}
        />
      </Col>
    )}
  </Row>
)

export default ItemsRow