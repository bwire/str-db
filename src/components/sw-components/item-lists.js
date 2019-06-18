import React from 'react';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import { withData } from '../hoc-helpers';

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = new SwapiService();

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { fn }
      </Wrapped>
    );
  }
};

const PersonList = withChildFunction(
  withData(ItemList, getAllPeople),
  ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`
);

const StarshipList = withData(ItemList, getAllStarships);
const PlanetList = withData(ItemList, getAllPlanets);

export {
  withChildFunction,
  PersonList,
  StarshipList,
  PlanetList
}