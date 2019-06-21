import React, { Component } from 'react';
import { PlanetList } from '../sw-components/item-lists';
import PlanetDetails from '../sw-components/planet-details';
import Row from '../row';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class PlanetPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <Row 
          left = { <PlanetList onItemSelected={ (item) => this.onItemSelected(item) } /> }
          right = { <PlanetDetails itemId = { this.state.selectedItem } /> }
        />
      </ErrorBoundary>
    )
  };
}