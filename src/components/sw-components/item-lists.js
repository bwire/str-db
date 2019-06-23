import React from 'react';
import ItemList from '../item-list';
import { withData, withChildFunction, withSwapiService } from '../hoc-helpers';

const PersonList = withSwapiService((swapiService) => { return { getData: swapiService.getAllPeople } })(
  withChildFunction(({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`)(
    withData(ItemList)
  )
);

const PlanetList = withSwapiService((swapiService) => { return { getData: swapiService.getAllPlanets } })(
  withChildFunction(({ name }) => <span>{ name}</span>)(
    withData(ItemList)
  )
);

const StarshipList = withSwapiService( (swapiService) => { return { getData: swapiService.getAllStarships } })(
  withChildFunction( ({ name }) => <span>{ name}</span>)(
    withData(ItemList)
  )
);

export {
  PersonList,
  PlanetList,
  StarshipList
}