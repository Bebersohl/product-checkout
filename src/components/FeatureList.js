import React from 'react'
import Feature from './Feature'

const FeatureList = ({ features }) => (
  <ul>
    {features.map((feature, index) =>
      <Feature
        key={index}
        text={feature}
      />
    )}
  </ul>
)

export default FeatureList