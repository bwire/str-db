import React from 'react';
import ItemList from '../item-list';
import { withData, withChildFunction, withSwapiService } from '../hoc-helpers';

const PersonList = withSwapiService(
  withChildFunction(
    withData(ItemList),
    ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`
  ), 
  (swapiService) => { return { getData: swapiService.getAllPeople } }
);

const PlanetList = withSwapiService(
  withChildFunction(
    withData(ItemList),
    ({ name }) => <span>{ name}</span> 
  ),
  (swapiService) => { return { getData: swapiService.getAllPlanets } }
);

export {
  PersonList,
  PlanetList
}