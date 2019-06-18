import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { SwapiServiceConsumer } from '../swapi-service-context'

const renderPerson = (itemId) => {
  return ({ getPerson, getPersonImage}) => {
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
  };
}

const PersonDetails = ( {itemId} ) => {
  return (
    <SwapiServiceConsumer>
      { renderPerson(itemId) }  
    </SwapiServiceConsumer>
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