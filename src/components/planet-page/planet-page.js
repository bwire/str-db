import React, { Component } from 'react';
import { PlanetList } from '../sw-components/item-lists';
import PlanetDetails from '../sw-components/planet-details';
import Row from '../row/row';
import ErrorBoundary from '../error-boundary/error-boundary';

import './planet-page.css'
export default class PlanetPage extends Component {
  state = {
    selectedPlanet: "1"
  };
  
  leftBlock = (
    <div className="col-md-6">
      <PlanetList onItemSelected={ (planet) => this.onPlanetSelected(planet) } />
    </div>
  );

  rightBlock = () => {
    return (
      <div className="col-md-6">
        <PlanetDetails itemId = { this.state.selectedPlanet } />;
      </div>
    );
  };

  onPlanetSelected = (selectedPlanet) => {
    this.setState({
      selectedPlanet
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <Row left = { this.leftBlock } right = { this.rightBlock() } />
      </ErrorBoundary>
    )
  };
}