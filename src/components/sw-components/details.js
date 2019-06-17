import React from 'react';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';

const {
  getPerson,
  getPersonImage
} = new SwapiService();

const PersonDetails = ( {itemId} ) => {
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

const StarshipDeatails = () => {

};

const PlanetDeatails = () => {

};

export {
  PersonDetails,
  StarshipDeatails,
  PlanetDeatails
}