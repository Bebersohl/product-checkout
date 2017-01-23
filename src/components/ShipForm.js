import React from 'react'
import { Panel, Button, FormGroup, FormControl, Col } from 'react-bootstrap'
import states from '../json/statesHash.json'
import ErrorList from './ErrorList'

const ShipForm = ({onSubmit, handleChange, errors, fields}) => (
  <Panel>
    <ErrorList errors={errors}/>
    <Col xs={12} md={8} mdOffset={2}>
      <form onSubmit={onSubmit}>
        <Col xs={12}>
          <FormGroup controlId="Name">
            <FormControl
              type="text"
              value={fields.Name}
              placeholder="Name"
              onChange={handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        </Col>
        <Col xs={12}>
          <FormGroup controlId="Street">
            <FormControl
              type="text"
              value={fields.Street}
              placeholder="Street"
              onChange={handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup controlId="City">
            <FormControl
              type="text"
              value={fields.City}
              placeholder="City"
              onChange={handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup controlId="State">
            <FormControl
              componentClass="select"
              value={fields.State}
              onChange={handleChange}
            >
              <option value="">State</option>
              {Object.keys(states).map((code) =>
                <option key={code} value={code}>
                  {states[code]}
                </option>
              )}
            </FormControl>
            <FormControl.Feedback />
          </FormGroup>
        </Col>
        <Col xs={12}>
          <FormGroup controlId="Zip">
            <FormControl
              type="text"
              value={fields.Zip}
              placeholder="Zip Code"
              onChange={handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        </Col>
        <Col xs={12}>
          <Button className="pull-right" bsStyle="success" bsSize="small" type="submit">Confirm</Button>
        </Col>
      </form>
    </Col>
  </Panel>
)


export default ShipForm