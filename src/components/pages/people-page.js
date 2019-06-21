import React, { Component } from 'react';
import { PersonList } from '../sw-components/item-lists';
import PersonDetails from '../sw-components/person-details';
import Row from '../row';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class PeoplePage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem
    });
  }

  render() {
    console.log('state', this.state);
    return (
      <ErrorBoundary>
        <Row 
          left = { <PersonList onItemSelected={ (item) => this.onItemSelected(item) } /> }
          right = { <PersonDetails itemId = { this.state.selectedItem } /> }
        />
      </ErrorBoundary>
    )
  };
}