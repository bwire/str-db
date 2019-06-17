import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import { withData } from '../hoc-helpers';

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = new SwapiService();

const PersonList = withData(ItemList, getAllPeople);
const StarshipList = withData(ItemList, getAllStarships);
const PlanetList = withData(ItemList, getAllPlanets);

export {
  PersonList,
  StarshipList,
  PlanetList
}