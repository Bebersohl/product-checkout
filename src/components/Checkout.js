import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PriceCalculator from './PriceCalculator'
import ShipForm from './ShipForm'

const Checkout = () => (
  <Row className="row-eq-height">
    <Col xs={4}>
      <PriceCalculator name="foo" price="bar"/>
    </Col>
    <Col xs={8}>
      <ShipForm/>
    </Col>
  </Row>
)

export default Checkout