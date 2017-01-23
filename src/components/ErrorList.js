import React from 'react'
import Error from './Error'
import { Col, Row, Alert } from 'react-bootstrap'

const ErrorList = ({ errors }) => {
  if(errors.length === 0){
    return null;
  }

  return (
    <Row>
      <Col xs={12} md={8} mdOffset={2}>
        <Alert bsStyle="danger">
          <ul>
            {errors.map((error, index) =>
              <Error
                key={index}
                name={error.name}
                text={error.text}
              />
            )}
          </ul>
        </Alert>
      </Col>
    </Row>
  )
}

export default ErrorList