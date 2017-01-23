import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PriceCalculator from './PriceCalculator'
import ShipForm from './ShipForm'

const Checkout = ({ item, onSubmit, handleChange, errors, fields }) => {
  let shipping = 5.99
  if(['NY', 'CA', 'MA'].includes(fields.State)) {
    shipping = 7.50
  }else if(['GA', 'AL', 'FL'].includes(fields.State)){
    shipping = 3.99
  }else if(fields.State === 'MN'){
    shipping = 0
  }
  return (
    <Row className="row-eq-height">
      <Col xs={4}>
        <PriceCalculator 
          item={item}
          shipping={shipping}
        />
      </Col>
      <Col xs={8}>
        <ShipForm 
          onSubmit={onSubmit} 
          handleChange={handleChange}
          errors={errors}
          fields={fields}
        />
      </Col>
    </Row>
  )
}

export default Checkout