import React, { Component } from 'react';
import { StarshipList } from '../sw-components/item-lists';
import StarshipDetails from '../sw-components/starship-details';
import Row from '../row';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class StarshipPage extends Component {
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
          left = { <StarshipList onItemSelected={ (item) => this.onItemSelected(item) } /> }
          right = { <StarshipDetails itemId = { this.state.selectedItem } /> }
        />
      </ErrorBoundary>
    )
  };
}