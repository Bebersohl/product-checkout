import React from 'react'

const Price = ({ price }) => (
  <div>
    ${price.toFixed(2)}
  </div>
)

export default Price