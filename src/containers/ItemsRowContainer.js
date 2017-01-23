import { connect } from 'react-redux'
import ItemsRow from '../components/ItemsRow'
import * as actions from '../actions'
import React, { Component } from 'react'
import Loader from '../components/Loader'

class ItemsRowContainer extends Component {
  componentDidMount() {
    if(this.props.items.length === 0) {
      this.props.dispatch(actions.fetchItems())
    }
  }
  render() {
    if(this.props.isFetching){
      return <Loader/>
    }
    return <ItemsRow items={this.props.items}/>
  }
}

const mapStateToProps = ({items, isFetching}) => ({
  items,
  isFetching,
})

export default connect(mapStateToProps)(ItemsRowContainer)