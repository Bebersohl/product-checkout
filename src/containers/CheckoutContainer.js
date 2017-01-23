import { connect } from 'react-redux'
import React, { Component } from 'react'
import Checkout from '../components/Checkout'
import NotFound from '../components/NotFound'
import {browserHistory} from 'react-router';

class CheckoutContainer extends Component {
  constructor(){
    super()
    this.state = {
      fields: {
        Name: '',
        Street: '',
        City: '',
        Zip: '',
        State: '',
      },
      errors: [],
    }
  }
  handleChange = (e) => {
    const { id, value } = e.target
    this.setState({
      ...this.state,
      fields: {
        ...this.state.fields,
        [id]: value,
      }
    });
  }
  onSubmit = (e) => {
    const { fields } = this.state
    const errors = Object.keys(fields)
      .filter(field => fields[field].length === 0)
      .map(field => ({name: field, text: ' is required'}))
    this.setState({ errors: errors})
    if(errors.length === 0){
      browserHistory.push('/thanks')
    }
    e.preventDefault()
  }
  render() {
    const selectedSku = this.props.params.sku;
    const selectedItem = this.props.items.find(item => item.sku == selectedSku)
    if(!selectedItem){
      return <NotFound/>
    }
    return (
      <Checkout 
        item={selectedItem}
        onSubmit={this.onSubmit}
        handleChange={this.handleChange}
        errors={this.state.errors}
        fields={this.state.fields}
      />
    )
  }
}

const mapStateToProps = ({items}) => ({
  items,
})

export default connect(mapStateToProps)(CheckoutContainer)