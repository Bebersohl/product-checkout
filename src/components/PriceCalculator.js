import React from 'react'
import { Panel, Table } from 'react-bootstrap'

const PriceCalculator = ({ item, shipping }) => (
  <Panel className="text-center">
    <h3><strong>{item.name}</strong></h3>
    <Table className="text-left">
      <tbody>
        <tr>
          <td>Price:</td>
          <td>${item.price.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Shipping:</td>
          <td>${shipping.toFixed(2)}</td>
        </tr>
        <tr>
          <td><h4><strong>Total:</strong></h4></td>
          <td><h4><strong>${(item.price + shipping).toFixed(2)}</strong></h4></td>
        </tr>
      </tbody>
    </Table>
  </Panel>
)

export default PriceCalculator