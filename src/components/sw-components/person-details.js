import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = ( {itemId, swapiService } ) => {
  const { getPerson, getPersonImage} = swapiService;
  return (
    <ItemDetails 
      itemId = { itemId } 
      getData = { getPerson } 
      getImageUrl = { getPersonImage }
    >
      <Record name = 'gender' label = 'Gender' />
      <Record name = 'birthYear' label = 'Year' />
      <Record name = 'eyeColor' label = 'Eyes' />
    </ItemDetails>
  );
}

export default withSwapiService(PersonDetails);