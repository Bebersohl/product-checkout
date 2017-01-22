import React, { Component } from 'react'
import { Panel, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Col, Row } from 'react-bootstrap'
import states from '../json/statesHash.json'

class ShipForm extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      street: '',
      city: '',
      zip: '',
      stateCode: '',
    }
  }
  getValidationState = () => {
    const length = this.state.name.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
  handleChange = (e) => {
    const { id, value } = e.target
    this.setState({ [id]: value });
  }
  render(){
    return (
      <Panel>
        <Col xs={12} md={8} mdOffset={2}>
          <form>
            <Col xs={12}>
              <FormGroup controlId="name">
                <FormControl
                  type="text"
                  value={this.state.name}
                  placeholder="Name"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
            </Col>
            <Col xs={12}>
              <FormGroup controlId="street">
                <FormControl
                  type="text"
                  value={this.state.street}
                  placeholder="Street"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
            </Col>
            <Col xs={8}>
              <FormGroup controlId="city">
                <FormControl
                  type="text"
                  value={this.state.city}
                  placeholder="City"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
            </Col>
            <Col xs={4}>
              <FormGroup controlId="stateCode">
                <FormControl
                  componentClass="select"
                  value={this.state.stateCode}
                  onChange={this.handleChange}
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
              <FormGroup controlId="zip">
                <FormControl
                  type="text"
                  value={this.state.zip}
                  placeholder="Zip Code"
                  onChange={this.handleChange}
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
  }
}

export default ShipForm