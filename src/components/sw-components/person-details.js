import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = ( props ) => {
  return (
    <ItemDetails {...props} >
      <Record name = 'gender' label = 'Gender' />
      <Record name = 'birthYear' label = 'Year' />
      <Record name = 'eyeColor' label = 'Eyes' />
    </ItemDetails>
  );
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);