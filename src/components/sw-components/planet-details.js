import React from 'react'
import ItemDetails, { Record} from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record name = 'population' label = 'Population' />
      <Record name = 'rotationPeriod' label = 'Rotation period' />
      <Record name = 'diameter' label = 'Diameter' />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);

