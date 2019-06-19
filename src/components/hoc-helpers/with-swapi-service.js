import React from 'react'
import { SwapiServiceConsumer } from '../swapi-service-context'

const withSwapiSevice = (Wrapped, mapper) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        { (swapiService) => {
          return <Wrapped {...props} {...mapper(swapiService)} />
        } }
      </SwapiServiceConsumer>
    )
  } 
};

export default withSwapiSevice;