import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = ( props ) => {
  return (
    <ItemDetails {...props} >
      <Record name = 'model' label = 'Model' />
      <Record name = 'cargoCapacity' label = 'Cargo capacity' />
      <Record name = 'length' label = 'Length' />
    </ItemDetails>
  );
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);